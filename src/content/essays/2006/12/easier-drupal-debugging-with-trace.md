---
title: Easier Drupal Debugging with Trace
date: '2006-12-03T22:28:33Z'
categories:
- Technology
tags:
- debugging
- Drupal
- modules
- PHP
- Trace
summary: Trace, a Drupal module for tracing hook invocations, PHP errors, and database queries, complete with stack traces.
original:
  url: http://bendiken.net/2006/12/03/easier-drupal-debugging-with-trace
  archive: https://web.archive.org/web/20080725102059/http://bendiken.net/2006/12/03/easier-drupal-debugging-with-trace
notice: Some of its images were not archived.
---

![Druplicon](./druplicon.crystal.small.png)

**[Trace](https://web.archive.org/web/20061203/http://drupal.org/project/trace)**
is a project that started, like these things tend to, as an innocent,
experimental [Drupal](https://web.archive.org/web/20061203/http://drupal.org/)
module I hacked together to implement all of the [core
hooks](https://web.archive.org/web/20061203/http://api.drupal.org/api/4.7/group/hooks)
exported by Drupal.

I was at the time working on
[Boost](https://web.archive.org/web/20061203/http://drupal.org/project/boost)
and wanted to gain a deeper understanding of the conditions and exact sequence
in which the Drupal module hooks were invoked, so I took the API listing and
wrote out the skeleton for each hook, sprinkling logging statements to capture
and output the arguments passed to the hooks by Drupal.

The initial output looked like the following; the comma-separated list after
each hook name is the list of modules which implement that particular hook in my
development installation:

```text
[HOOK] hook_init: boost
[HOOK] hook_menu: filter, node, system, user, watchdog, boost, ...
[HOOK] hook_node_grants: 
[HOOK] hook_db_rewrite_sql: node
[HOOK] hook_node_info: page, story
[HOOK] hook_nodeapi: boost, comment, menu, path, taxonomy
[HOOK] hook_db_rewrite_sql: node
[HOOK] hook_nodeapi: boost, comment, menu, path, taxonomy
[HOOK] hook_link: node, comment, taxonomy
[HOOK] hook_nodeapi: boost, comment, menu, path, taxonomy
[HOOK] hook_db_rewrite_sql: node
[HOOK] hook_nodeapi: boost, comment, menu, path, taxonomy 
[HOOK] hook_link: node, comment, taxonomy  
[HOOK] hook_nodeapi: boost, comment, menu, path, taxonomy
[HOOK] hook_db_rewrite_sql: node
[HOOK] hook_nodeapi: boost, comment, menu, path, taxonomy
[HOOK] hook_link: node, comment, taxonomy
[HOOK] hook_footer: 
[HOOK] hook_help: filter, node, system, user, watchdog, boost, ...
[HOOK] hook_exit: boost
```

### Tracing Drupal Hook Invocations

In the course of things it dawned on me that there was, of course, a much better
way to do all this — namely by dynamically defining the hook functions on the
fly, and injecting into each a call to
[`debug_backtrace()`](https://web.archive.org/web/20061203/http://php.net/debug_backtrace)
to obtain not only the arguments passed to the function (which could be gotten
with `func_get_args()`, after all) but also the full [stack
trace](https://web.archive.org/web/20061203/http://en.wikipedia.org/wiki/Stack_trace)
(call history) that led to the hook invocation.

Saddened as I was to obliterate the couple of hundred lines of code I had at
that point, I took the plunge and was left with three dozen lines of code that
did the same thing, just better — the joys of exploratory programming in a
(somewhat) dynamic language.

As a secondary effect, this also gave me a facile way to implement a kill switch
that rather thoroughly disabled the module when necessary:

### Stack Traces for Drupal Hooks

Next, I wrote helper functions to output the stack traces in a sensible,
programmer-friendly format (in fact, using PHP syntax), so that the output
looked like this:

```text
[HOOK] hook_menu: filter, node, system, user, watchdog, boost, ...
       trace_menu(FALSE)
       call_user_func_array('trace_menu', array(FALSE)) @ `includes/module.inc':203
       module_invoke_all('menu', FALSE) @ `includes/menu.inc':1196
       _menu_append_contextual_items() @ `includes/menu.inc':220
       menu_get_menu() @ `includes/menu.inc':391
       menu_execute_active_handler() @ `index.php':15
```

Since the list of hooks to tap into had become metadata, it was natural enough
to externalize all that into an INI file, while at the same time adding support
for non-core hooks. This called for a user interface for controlling which hooks
to activate and trace:

### Error Logging with Stack Traces

When coding the stack tracing, another light bulb went on about how this could
be valuable for debugging PHP errors — not just in a development environment,
where other debugging solutions might be available as well, but even on
production servers. If one could get useful stack traces from a production box,
that would aid tremendously in tracking down elusive PHP errors from
environments which could be running rather disparate PHP/Apache/MySQL stacks
when compared to the development environment.

This turned out to be trivial to implement — simply a matter of overriding
Drupal’s error handler to add stack frame collection and tracing, and chaining
back to the original error handler afterwards. No harm done, except for more
milliseconds lost on each error in the name of higher programmer productivity –
good motivation to minimize the number of errors ;-)

To reduce the time spent hunting for the causes of errors, I also added an
option to output the actual source code line that triggered the error, just
preceding the full stack trace up to that point. The following example
illustrates one line in the Drupal 4.7 code base that looks like it could use a
call to [`isset()`](https://web.archive.org/web/20061203/http://php.net/isset)
to prevent triggering a number of spurious, if ultimately harmless, PHP notices:

```text
[NOTICE] E_NOTICE: Undefined index:  sort @ `modules/comment.module':1677
         if ($_GET[$setting]) {
         _comment_get_display_setting('sort') @ `modules/comment.module':707
         comment_render((stdClass)array('nid' => '2', 'vid' => '2', 'type' => 'story', …))
         node_show((stdClass)array('nid' => '2', 'vid' => '2', 'type' => 'story', …))
         node_page()
         call_user_func_array('node_page', array()) @ `includes/menu.inc':418
         menu_execute_active_handler() @ `index.php':15
```

### Extensible Trace Output Drivers

The module sort of snowballed from there. Upon consideration of how to best
perform trace output logging in production environments, I came to the
conclusion that it would be a good idea to add an abstraction layer between the
actual tracing-related function calls and the subsequent physical output, which
had until then been exclusively written to a dedicated log file.

This led to the concept of output targets or “drivers”, with `File` being the
default target:

In addition to `File`, currently implemented is also a `Syslog` driver. The idea
of syslog support is that you can have the Trace module activated (with minimal
tracing options, e.g. only trace errors), on your production server and tie the
output to your existing system log analysis and reporting facilities.

Two other drivers I’ve been considering implementing are a TCP socket driver and
an e-mail backend. The former could, by its ephemeral nature, be useful in
speeding up “deep tracing” (with the `File` backend, having all trace options
enabled kills performance both due to the volume of data being written to disk
as well as the constant `fsync()`‘ing), while the latter would, again, be useful
for production environments: imagine your mission-critical Drupal application
sending you a bug report e-mail when a PHP error occurs; said e-mail containing
a wealth of information on the page request, server state, and a full stack
trace of the code that caused the error.

The way that the output driver concept is currently implemented is quite
flexible, by the way — the module actually defines a new hook, `hook_trace()`,
which is invoked for each tracing event. (This hook itself can, obviously, not
be traced.) Any modules that implement this hook —
[Devel](https://web.archive.org/web/20061203/http://drupal.org/project/devel)
would be a good future candidate — have access to all trace output as it
happens; the existing Trace output drivers are concrete implementations of the
hook that just happen to be provided by default.

### Tracing Database Queries

I also tapped into Drupal’s undocumented SQL query tracing facilities (which
ostensibly exist to support the
[Devel](https://web.archive.org/web/20061203/http://drupal.org/project/devel)
module) and added output for each query executed during the page request:

```text
[QUERY] drupal_lookup_path: SELECT COUNT(pid) FROM url_alias
[QUERY] drupal_lookup_path: SELECT src FROM url_alias WHERE dst = ...
[QUERY] module_list: SELECT name, filename, throttle, bootstrap ...
[QUERY] cache_clear_all: DELETE FROM cache WHERE cid = 'variables'
[QUERY] cache_get: SELECT data, created, headers, expire FROM ...
[QUERY] node_access_view_all_nodes: SELECT COUNT(*) FROM ...
[QUERY] pager_query: SELECT COUNT(*) FROM node n WHERE n.promote  ...
[QUERY] pager_query: SELECT n.nid, n.sticky, n.created FROM node ...
[QUERY] drupal_lookup_path: SELECT dst FROM url_alias WHERE src ...
...
```

In the interests of brevity, I haven’t included any timing information in any of
the above examples of the trace output. In actuality, however, each trace log
message includes a microsecond-precision time delta measured against the start
time of the page request. (The actual accuracy, though, perhaps being somewhat
more coarse-grained due to time lost to tracing.)

The timing information for SQL queries was a bit of a pain to implement using
the currently available query debugging facility in Drupal 4.7. As a result, the
timestamp for each SQL query is, for the moment, nothing but a best-guess value.
Not that this slight inaccuracy will matter for most uses, but once I’ve wrapped
up version 1.0 of Trace I plan to submit a Drupal core patch that will not only
make the tracing simpler (from the core point of view) but allow for
significantly increased functionality, too.

### Additional Debug Output

Just to supplement the information available in the trace output, an option was
added for dumping the contents of the PHP superglobals at the start of the page
request, and for including further debug information (such as the HTTP headers
that were set during processing of the page request) at the of the response:

```text
[REQUEST] 2006-12-03 22:46:12.306834 GET / HTTP/1.1
[DEBUG  ] $_ENV = array('PATH' => '/usr/bin:/bin', 'PWD' => '/', ...)
[DEBUG  ] $_SERVER = array('HTTP_ACCEPT' => '*/*', ...)
[DEBUG  ] $_COOKIE = array('DRUPAL_UID' => '1', 'PHPSESSID' => ...)
[DEBUG  ] $_REQUEST = array('DRUPAL_UID' => '1', 'PHPSESSID' => ...)
[DEBUG  ] $_GET = array('q' => 'node')
[DEBUG  ] $_SESSION = array('node_overview_filter' => array())
...
(other output omitted)
...
[DEBUG  ] drupal_set_message() = NULL
[DEBUG  ] drupal_set_header() = array('Content-Type: text/html; charset=utf-8')
[STATS  ] Total SQL queries: 59
[RESPNSE] 2006-12-03 22:46:12.453383 200 OK
```

### Improving the Signal-to-Noise Ratio

Now that things were rolling, I was getting plenty of trace output – in fact,
**way** too much. A single page request for my development site’s front page
would easily generate 30 megabytes of output. Obviously, it was time to put some
effort into cutting down on unnecessary output.

First, I added a setting for filtering which SQL queries would be traced and
which summarily ignored:

More importantly, however, it was getting to be a pain to browse the
administrative interface with tracing enabled; to solve this, I implemented a
filter to control trace activation based on page paths and wildcards, in a
manner very similar to how block visibility is determined in Drupal:

The module’s fine-grained advanced settings are also instrumental in determining
how much output will actually be generated:

### Current Status and Future Directions

At present, I have mostly finished the features that I want for a release one-oh
of the module — with the notable lack of watchdog message tracing, which has not
yet been implemented. The module should already be stable enough to serve as an
everyday asset for intrepid Drupal developers, and any help in testing it would
certainly be most appreciated.

Beyond 1.0, there are a number of directions the module could take. For one
thing, I’m in the process of experimenting with some of PHP’s [more advanced
features](https://web.archive.org/web/20061203/http://php.net/register_tick_function)
which might provide rather powerful facilities that Trace could take advantage
of. It is not inconceivable that something like a JavaScript-based, real-time
PHP breakpointer or debugger could be built on top of these language constructs
and the foundation already laid in Trace.

Before embarking on such flights of fancy, though, I’m interested in hearing
feedback on how the module has been, or could be, useful for **you**. What’s the
most valuable use case, in your opinion? Is it about troubleshooting production
environments, empowering Drupal developers, or both? If you have any thoughts on
the matter, please leave a comment or [contact
me](https://web.archive.org/web/20061203/http://bendiken.net/contact) directly.
