//1
function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
let verificaPalindrome = isPalindrome('ganhar');
console.log(verificaPalindrome); 

//2
let integers = [2, 3, 6, 7, 10, 20, 44, 32, 12, 1];

function getIndexBiggerNumber(array) {
  let numbers = array
  let index = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers[index]) {
      index = i;
    }
  }
  return index;
}
let indexBiggerNumber = getIndexBiggerNumber(integers);
console.log(indexBiggerNumber)

//3
let integers2 = [2, 4, 6, 7, 10, 0, -3];

function getIndexLowerNumber(array) {
  let index = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] < array[index]) {
      index = i;
    }
  }
  return index;
}
let indexLowerNumber = getIndexLowerNumber(integers2);
console.log(indexLowerNumber);

//4
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function getBiggerName(array) {
  let name = '';
  for (let i = 0; i < array.length; i++){
    let currentName = array[i]
    if (currentName.length > name.length){
      name = array[i]
    }
  }
  return name;
}
let biggerName = getBiggerName(names);
console.log(biggerName);

//5
function repeatingIntegers(array) {
  let timeRepeated = 0;
  let repeatedMoreTime = 0;
  let numberMoreRepeated = 0;
  for (let i in array){
    let number = array[i];
    for (let i2 in array) {
      if (number === array[i2]) {
        timeRepeated += 1;
      }
    }
    if (timeRepeated > repeatedMoreTime){
    repeatedMoreTime = timeRepeated
    numberMoreRepeated = array[i]
    }
    timeRepeated = 0
  }
  return numberMoreRepeated;
}
let numbers = [2, 3, 2, 5, 8, 2, 3];
let numberMoreRepeated = repeatingIntegers(numbers);
console.log(numberMoreRepeated);

//6
function sumNumbers(n) {
  let sumNumbers = 0;
  for (let i = 1; i <= n ; i++) {
    sumNumbers = sumNumbers + i;
  }
  return sumNumbers;
}
console.log(sumNumbers(6));

//7
function verifyWord(word, endWord) {
  word = word.split('');
  endWord = endWord.split('');
  let equal = true;
  for (let i = 0; i < endWord.length; i++) {
    if (word[word.length - endWord.length + i] != endWord[i]) {
      equal = false;
    }
  
  }
  return equal;
}
console.log(verifyWord('trybe', 'be'))