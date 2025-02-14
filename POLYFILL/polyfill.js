// Polyfill for aray.prototype.forEach

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (userFn) {};
}
