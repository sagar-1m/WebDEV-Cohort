const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        res.end("This is the homepage");
        break;
      case "/about":
        res.end("This is the about page");
        break;
      default:
        res.end("Page not found");
    }
  } else if (req.method === "POST") {
    switch (req.url) {
      case "/":
        res.end("You just sent a POST request");
        break;
      case "/about":
        res.end("You just sent a POST request to the about page");
        break;
      default:
        res.end("Page not found");
        break;
    }
  } else {
    res.end("Method not allowed");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
