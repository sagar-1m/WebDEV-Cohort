# Building a Custom Express-Like Framework in Node.js from Scratch

## Introduction

- Express is a popular web application framework for Node.js that provides a simple and flexible way to build web applications.
- In this guide, we will build a custom Express-like framework in Node.js from scratch.

## Prerequisites

- Basic knowledge of Node.js and JavaScript
- Node.js installed on your machine

## Importing HTTP Module

- The `http` module is a core module in Node.js that allows you to create an HTTP server and make HTTP requests.
- To include the HTTP module, use the `require()` method:

```javascript
const http = require("http");
```

- The `http` module provides a way of working with HTTP requests and responses.
- It can be used to start an HTTP server that listens for requests from clients.
- The HTTP module provides the core server functionality that Express is built on top of

## Main Factory Function

```javascript
function KhudKaExpress() {
```

- Creates a function that acts as a factory (similar to how express() works)
- "KhudKaExpress" translates to "Self-made Express"

## Routes Storage

```javascript
const routes = {
  get: {},
  post: {},
};
```

- Creates an object to store routes
- The object has two properties: `get` and `post`
- Each property is an object that stores routes for the respective HTTP method
- The routes are stored as key-value pairs, where the key is the route path and the value is the route handler function
- This structure enables O(1) lookup time for routes based on the HTTP method and route path

## Creating the Application Object

```javascript
const app = {
```

- Creates an object that represents the application (similar to how express() returns an app object)
- The app object contains methods for defining routes and starting the server (similar to how express() works)

## Route Definition Methods

```javascript
get: (path, handler) => {
  routes.GET[path] = handler;
},
post: (path, handler) => {
  routes.POST[path] = handler;
},
```

- Defines methods for adding routes to the application object (similar to how express() defines methods like `app.get()` and `app.post()`)
- These methods register route handlers for specific HTTP methods and paths
- Parameters:
  - `path`: The route path (e.g., "/" or "/about")
  - `handler`: The route handler function that will be called when the route is matched
- The handlers are stored in the `routes` object based on the HTTP method and route path
- Uses closures to capture the `path` and `handler` arguments within the route definition methods

## Server Creation and Request Handling

```javascript
  listen: (port, callback) => {
    const server = http.createServer((req, res) => {
      const method = req.method.
      const path = req.url;
```

- Defines a `listen` method on the app object that creates an HTTP server and starts listening on the specified port
- The `http.createServer()` method is used to create an HTTP server that handles incoming requests
- The server callback function takes two arguments: `req` (the request object) and `res` (the response object)
- Extracts the HTTP method and request URL from the request object

## Route Matching Logic

```javascript
if (routes[method] && routes[method][path]) {
  routes[method][path](req, res);
} else {
  res.end("Page not found");
}
```

- Checks if there is a route handler registered for the requested HTTP method and path
- First checks if the `method` exists in the `routes` object, then checks if the `path` exists within the method-specific routes
- If a matching route handler is found, it is called with the request and response objects
- If no matching route handler is found, a "Page not found" response is sent back to the client

## Starting the Server

```javascript
server.listen(port, callback);
```

- Starts the HTTP server on the specified port and calls the provided callback function
- The server will start listening for incoming requests on the specified port number (e.g., 3000)
- The callback function is called once the server has started successfully
- Typically, the callback function is used to log a message indicating that the server is running

## Return Application Object

```javascript
  return app;
}
```

- Returns the application object, which contains the route definition methods (`get` and `post`) and the `listen` method
- The application object can be used to define routes and start the server

## Exporting the Factory Function

```javascript
module.exports = KhudKaExpress;
```

- Exports the factory function `KhudKaExpress` so that it can be imported and used in other files
- When the module is imported, it will return the `KhudKaExpress` function, allowing users to create their own custom Express-like framework

## Summary

- The custom Express-like framework is created using a factory function that returns an application object
- The application object contains methods for defining routes (`get` and `post`) and starting the server (`listen`)
- The routes are stored in an object based on the HTTP method and route path for efficient route matching
- The server logic handles incoming requests, matches routes, and calls the appropriate route handler functions
- The custom framework provides a basic structure for building web applications with routing capabilities similar to Express

## Example Usage

```javascript
const KhudKaExpress = require("./KhudKaExpress");

const app = KhudKaExpress();

app.get("/", (req, res) => {
  res.end("Hello, World!");
});

app.post("/about", (req, res) => {
  res.end("About Page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

- Import the custom Express-like framework
- Create an application object using the factory function
- Define routes using the `get` and `post` methods on the application object
- Start the server by calling the `listen` method with the desired port number and a callback function
- The server will listen for incoming requests and respond with the appropriate route handlers

## Conclusion

- The custom Express-like framework provides a simplified implementation of an HTTP server with routing capabilities
