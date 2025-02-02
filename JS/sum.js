function sumCalculation(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
}

let result = sumCalculation([1, 2, 3, 4, 5]);
console.log(result); // 15

// console.log(sumCalculation([1, 2, 3, 4, 5])); // 15
