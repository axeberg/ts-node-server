import { createServer, IncomingMessage, ServerResponse } from 'http';

const defaultPort = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  switch (request.url) {
    case '/': {
      if (request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify({ message: 'All good' }));
      }
      break;
    }
    default: {
      response.setHeader('Content-Type', 'application/json');
      response.statusCode = 404;
      response.end(JSON.stringify({ message: '404 Not found' }));
    }
  }
});

server.listen(defaultPort, () => {
  console.log(`Server listening on port ${defaultPort}`);
});
