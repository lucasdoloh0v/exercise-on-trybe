//1
function sum(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}

function rest(a, b) {
  console.log(a % b);
}
sum(7, 8);
subtract(7, 8);
multiply(7, 8);
divide(7, 8);
rest(7, 8);

//2
function biggerOfTwoNumber (a, b) {
  if (a > b) { 
  console.log(a);
  } else {
    console.log(b);
  }
}
biggerOfTwoNumber(7, 8);

//3
function biggerOfThreeNumber (a, b, c) {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
biggerOfThreeNumber(7, 8, 4);

//4
function positiveNegative(a) {
  if (a > 0) {
    console.log('positive');
  } else if (a < 0){
    console.log('Negative');
  } else {
    console.log('zero');
  }
}
positiveNegative(-45);

//5
function triangle(angleA, angleB, angleC) {
  if (angleA > 0 && angleB > 0 && angleC > 0) {
    if (angleA + angleB + angleC == 180) {
    console.log('true');
    } else if (angleA + angleB + angleC != 180) {
    console.log('false');
    }
  } else {
    console.log('valor não suportado');
  }
}
triangle(45, 45, -2)

//6
function chessPieces(piece) {
  piece = piece.toLowerCase();

  if (piece == 'pawn') {
    console.log('foward 1 square');
  } else if (piece == 'rook') {
    console.log('columns and lines');
  } else if (piece == 'knight') {
    console.log('L moves');
  } else if (piece == 'bishops') {
    console.log('diagonals');
  } else if (piece == 'queen') {
    console.log('all directions');
  } else if (piece == 'king') {
    console.log('all directions, but 1 square');
  }
}
chessPieces("knight");

//7
function resultTest(testGrade) {
  if (testGrade >= 90) {
    console.log('A');
  } else if (testGrade >= 80) {
    console.log('B');
  } else if (testGrade >= 70) {
    console.log('C');
  } else if (testGrade >= 60) {
    console.log('D');
  } else if (testGrade >= 50) {
    console.log('E');
  } else {
    console.log('F');
  }
}
resultTest(89)

//8
function oneEven(number1, number2, number3) {
  if (number1 % 2 == 0 || number1 % 2 == 0 || number3 % 2 == 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}
oneEven(7, 8, 2)

//9
function oneOdd(number1, number2, number3) {
  if (number1 % 2 == !0 || number1 % 2 == !0 || number3 % 2 == !0) {
    console.log('true');
  } else {
    console.log('false');
  }
}
oneOdd(7, 8, 1);

//10
function profit(cost, saleValue) {
  let costTotal = cost + (cost * 20/100);
  let profit = saleValue - costTotal;
  if (cost <= 0 && saleValue <= 0) {
    console.log('valor não suportado')
  } else {
    console.log(profit * 1000);
  }
}
profit(10, 15);

//11
function netSalary(grossSalary) {
  let baseSalary = 0
  let netSalary = 0
  if (grossSalary <= 1556.94) {
    baseSalary = grossSalary - (grossSalary * 8/100);
  } else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    baseSalary = grossSalary - (grossSalary * 9/100);
  } else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    baseSalary = grossSalary - (grossSalary * 11/100);
  } else {
    baseSalary = grossSalary - 570.88;
  } 


  if (baseSalary <= 1903.98) {
    netSalary = baseSalary;
  } else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    netSalary = baseSalary - [(baseSalary * 7.5/100) - 142.80];
  } else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    netSalary = baseSalary - [(baseSalary * 15/100) - 354.80];
  } else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    netSalary = baseSalary - [(baseSalary * 22.5/100) - 636.13];
  } else {
    netSalary = baseSalary - [(baseSalary * 27.5/100) - 636.13];
  }
  console.log(baseSalary);
  console.log(netSalary);
}
netSalary(3000);