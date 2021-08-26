/// 1°
/*const a = 8;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);*/

/// 2°
/* const a = 2;
const b = 3;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}*/

/// 3°
/*const a = 52;
const b = 74;
const c = 75;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}*/

/// 4°
/*const a = 0

if (a > 0) {
  console.log('positive');
} else if (a < 0){
  console.log('Negative');
} else {
  console.log('zero');
}*/

/// 5°
/*const angleA = 90;
const angleB = 60;
const angleC = 30;

if (angleA + angleB + angleC == 180) {
  console.log('true');
} else if (angleA + angleB + angleC == !180) {
  console.log('false');
} else {
  console.log('valor não suportado');
}*/

///6°
/*let chessPieces = 'Knigth';
chessPieces = chessPieces.toLowerCase();

if (chessPieces == 'pawn') {
  console.log('foward 1 square');
} else if (chessPieces == 'rook') {
  console.log('columns and lines');
} else if (chessPieces == 'knigth') {
  console.log('L moves');
} else if (chessPieces == 'bishops') {
  console.log('diagonals');
} else if (chessPieces == 'queen') {
  console.log('all directions');
} else if (chessPieces == 'king') {
  console.log('all directions, but 1 square';)
}*/

/// 7°
/*let testGrade = 75;

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
}*/

/// 8°
/*const number1 = 7;
const number2 = 45;
const number3 = 39;

if (number1 % 2 == 0 || number1 % 2 == 0 || number3 % 2 == 0) {
  console.log('true');
} else {
  console.log('false');
}*/

/// 9°
/*const number1 = 7;
const number2 = 44;
const number3 = 38;

if (number1 % 2 == !0 || number1 % 2 == !0 || number3 % 2 == !0) {
  console.log('true');
} else {
  console.log('false');
}*/

/// 10°
/*let valorCusto = 10;
let valorCustoTotal = (valorCusto + valorCusto * 20/100);
let valorVenda = 15;
let lucro = valorVenda - valorCustoTotal;

if (valorCusto <= 0 && valorVenda <= 0) {
  console.log('valor não suportado')
} else {
  console.log(lucro * 1000);
}*/

/// 11°
let salarioBruto = 3000;
let salarioBase ;
let salarioLiquido ;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 8/100);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 9/100);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 11/100);
} else {
  salarioBase = salarioBruto - 570.88;
} 

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - [(salarioBase * 7.5/100) - 142.80];
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - [(salarioBase * 15/100) - 354.80];
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - [(salarioBase * 22.5/100) - 636.13];
} else {
  salarioLiquido = salarioBase - [(salarioBase * 27.5/100) - 636.13];
}

console.log(salarioBase)
console.log(salarioLiquido)
