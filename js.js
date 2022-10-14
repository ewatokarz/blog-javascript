console.log("ooo");
const numbers = [53, 21, 33];

for (let i = 0; i < numbers.length; i++) {
  const item = numbers[i];
  console.log(item);
}

function multiplyNumbers(numA, numB = 2) {
  return numA * numB;
}

console.log("multiplyNumbers(5, 3) =", multiplyNumbers(5, 3)); // multiplyNumbers(5, 3) = 15
console.log("multiplyNumbers(5) =", multiplyNumbers(5)); // multiplyNumbers(5) = 10
