// INTERNAL WORKING OF NODE JS
// Node.js is a runtime environment for executing JavaScript code. It is built on the Chrome V8 JavaScript engine. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js package ecosystem, npm, is the largest ecosystem of open source libraries.
// Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its official documentation is as follows −
// It works for both client and server side applications. It is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript.

// internal working of node js wrapper function
executor = function (module, exports, require, __filename, __dirname) {
  // Module code actually lives in here
};
// The wrapper function is a function that has five parameters. These parameters are passed by Node.js to the module code.
// module: It is a reference to the current module. module is a JSON object and it exports the current module properties, methods, and functions.
// exports: It is an object that will be exposed as a module. It is a reference to module.exports.
// require: It is a function that is used to import modules, export objects, or functions. It is a reference to require().
// __filename: It is the filename of the code being executed
// __dirname: It is the directory name of the code being executed

// how to use require in node js
// The require() function is used to include external modules in Node.js. The require() function takes the following path arguments:
// Core Modules
// Local Modules
// Third-party Modules

// Core Modules
// Core modules are modules that are shipped with Node.js. These modules are located in the lib folder of the Node.js installation directory. You can import core modules using the require() function.
// Example
var http = require("http");

// Local Modules
// Local modules are modules that are created locally in your Node.js application. You can import local modules using the require() function.
// Example
// var myModule = require("./myModule");

// Third-party Modules
// Third-party modules are modules that are created by third-party developers. You can import third-party modules using the require() function.
// Example
// var express = require("express");

// creating a file using fs module
// The fs module is used to perform file operations in Node.js. You can use the fs module to create, read, update, and delete files in Node.js.
// Example
const fs = require("fs");

fs.writeFile("hello.txt", "Hello, World!", function (err) {
  if (err) throw err;
  console.log("File created successfully");
});

// importing my own module using require
const myModule = require("./02_export");

myModule.myFunction();
console.log(myModule.myString);

const sum = myModule.sum(5, 3);
console.log("Sum:", sum);
