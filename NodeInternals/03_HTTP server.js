// HTTP simple server

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// In this example, we have created a simple HTTP server using the http module. We have created a server object using the createServer() method, which takes a request listener function as an argument. The request listener function takes two arguments, req (request) and res (response), which represent the request and response objects, respectively. We have used the end() method of the response object to send the response back to the client with the message "Hello, World!". Finally, we have used the listen() method of the server object to start the server on port 3000. When the server is started, the message "Server is running on port 3000" is logged to the console. You can access the server by navigating to http://localhost:3000 in your web browser. The server will respond with the message "Hello, World!".
