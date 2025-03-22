// how to use exports in node js
// The exports object is used to export objects, functions, and properties from a module in Node.js. You can use the exports object to export objects, functions, and properties from a module.
// Example
// // myModule.js

exports.myFunction = function () {
  console.log("Function called");
};

exports.myString = "Hello, World!";

const sum = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = { sum, subtract }; // exporting multiple functions from a module in Node.js
