// we will build a custom version of the express module to understand how it works under the hood.

// Custom Express Module
// We will build a custom version of the express module to understand how it works under the hood. We will create a simple web server using our custom express module. to handle GET and POST requests.

// Create a new file named custom-express.js and add the following code:

// custom-express.js

const http = require("http");

function KhudKaExpress() {
  const routes = {
    GET: {},
    POST: {},
  };

  const app = {
    get: (path, handler) => {
      routes.GET[path] = handler;
    },
    post: (path, handler) => {
      routes.POST[path] = handler;
    },
    listen: (port, callback) => {
      const server = http.createServer((req, res) => {
        const method = req.method;
        const path = req.url;

        if (routes[method] && routes[method][path]) {
          routes[method][path](req, res);
        } else {
          res.end("Page not found");
        }
      });

      server.listen(port, callback);
    },
  };

  return app;
}

module.exports = KhudKaExpress;

// In this code snippet, we have created a custom express module named KhudKaExpress. The KhudKaExpress function returns an app object that has three methods: get, post, and listen.

// The get and post methods are used to define routes for GET and POST requests, respectively. The get and post methods take two arguments: the route path and a request handler function. The request handler function takes two arguments, req (request) and res (response), which represent the request and response objects, respectively. The get and post methods store the route path and request handler function in the routes object based on the request method (GET or POST).

// The listen method is used to start the server on the specified port. The listen method takes two arguments: the port number and a callback function. The listen method creates an HTTP server using the createServer method of the http module. The server object listens for incoming requests and checks if the requested route path exists in the routes object based on the request method (GET or POST). If the route path exists, the request handler function is called with the request and response objects. If the route path does not exist, the server responds with "Page not found".
