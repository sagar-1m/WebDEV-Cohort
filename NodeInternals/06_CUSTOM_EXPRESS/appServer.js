const KhudKaExpress = require("./index.js");

const app = KhudKaExpress();

app.get("/", (req, res) => {
  res.end("This is the homepage of our custom express server");
});

app.post("/", (req, res) => {
  res.end("You just sent a POST request");
});

app.get("/about", (req, res) => {
  res.end("This is the about page of our custom express server");
});

app.post("/about", (req, res) => {
  res.end("You just sent a POST request to the about page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
