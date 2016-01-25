#!/usr/bin/env python
import docutils.core, os, sys
from docutils.writers import html4css1

__DIR__ = os.path.abspath(os.path.dirname(__file__))

class MyHTMLWriter(html4css1.Writer):
  settings_defaults = {
    'output_encoding_error_handler': 'xmlcharrefreplace',
    'template': os.path.join(__DIR__, 'template.html'),
    'initial_header_level': '2',
  }
  def __init__(self):
    html4css1.Writer.__init__(self)
    self.translator_class = MyHTMLTranslator

class MyHTMLTranslator(html4css1.HTMLTranslator):
  def depart_title(self, node):
    html4css1.HTMLTranslator.depart_title(self, node)
    # Strip any HTML tags from inside <title>...</title>:
    self.title = [s for s in self.title if s[0] != '<']
  def visit_attribution(self, node):
    self.body.append(self.starttag(node, 'footer'))
  def depart_attribution(self, node):
    self.body.append('</footer>\n')
  def visit_admonition(self, node):
    self.body.append(self.starttag(node, 'div', CLASS='alert alert-info', role='alert'))
    self.set_class_on_child(node, 'text-info', 0)
  def depart_admonition(self, node=None):
    self.body.append('</div>\n')
  def visit_table(self, node):
    self.context.append(self.compact_p)
    self.compact_p = True
    classes = ' '.join(['table', self.settings.table_style]).strip()
    self.body.append(self.starttag(node, 'table', CLASS=classes, border="0"))

if sys.argv[1:]:
  for arg in sys.argv[1:]:
    path = os.path.abspath(arg)
    os.chdir(os.path.dirname(path))
    print docutils.core.publish_string(open(path).read(), writer=MyHTMLWriter())
else:
  print docutils.core.publish_string(sys.stdin.read(), writer=MyHTMLWriter())
