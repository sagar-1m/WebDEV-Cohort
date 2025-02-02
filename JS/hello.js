function printChai() {
  console.log("Chai");
} // this is factory of printChai function

function bringBrush(itne) {
  console.log(`Hanji, le aaya ${itne} brush`);
} // this is factory of bringBrush function

function addTwoNumbers(phela, dusra) {
  return phela + dusra;
}

bringBrush(4); // factory of bringBrush function is called here and it will print "Brush" in console

printChai(); // factory of printChai function is called here and it will print "Chai" in console

console.log(addTwoNumbers(2, 3)); // factory of addTwoNumbers function is called here and it will return 5
