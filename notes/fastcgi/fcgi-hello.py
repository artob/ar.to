#!/usr/bin/env python

def app(environ, start_response):
  body = 'Hello, world!\n'
  start_response('200 OK', [
    ('Content-Type', 'text/plain'),
    ('Content-Length', str(len(body)))
  ])
  return iter([body])

if __name__ == '__main__':
  from flup.server.fcgi import WSGIServer
  WSGIServer(app, bindAddress=('127.0.0.1', 8000)).run()
