let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1
console.log(numbers);

//2
let sumNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers);

//3
let arithmeticAverage = 0;

arithmeticAverage = sumNumbers / numbers.length;
console.log(arithmeticAverage);

//4
if (arithmeticAverage > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
}

//5
let higherNumber = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}
console.log(higherNumber);

//6
let numberOdd = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    numberOdd.push(numbers[i]);
  }
}
console.log(numberOdd);

//7
let lowerNumber = higherNumber;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < lowerNumber) {
    lowerNumber = numbers[i];
  }
}
console.log(lowerNumber);

//8 & 9
let growingList = [];
for (let i = 1; i < 26; i++) {
  growingList.push(i)
  console.log(growingList[i-1] /2)
}
console.log(growingList);