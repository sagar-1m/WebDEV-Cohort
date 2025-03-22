// express is a popular web framework for Node.js. It is used to build web applications and APIs. You can use the express module to create a web server in Node.js.

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// In this example, we have created a simple web server using the express module. We have created an express application object using the express() function. We have used the get() method of the application object to define routes for the homepage ("/") and the about page ("/about"). The get() method takes two arguments, the route path and a request handler function. The request handler function takes two arguments, req (request) and res (response), which represent the request and response objects, respectively. We have used the send() method of the response object to send the response back to the client with the appropriate message. Finally, we have used the listen() method of the application object to start the server on port 3000. When the server is started, the message "Server is running on port 3000" is logged to the console. You can access the server by navigating to http://localhost:3000 in your web browser. The server will respond with the appropriate message based on the route path.
