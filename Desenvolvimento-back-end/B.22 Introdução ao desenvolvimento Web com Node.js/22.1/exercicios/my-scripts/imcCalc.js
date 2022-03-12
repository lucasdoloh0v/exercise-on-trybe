const readline = require('readline-sync');

const imcResult = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return 'peso normal';
  }
  if (imc >= 25 && imc <= 29.9) {
    return 'acima do peso';
  }
  if (imc >= 30 && imc <= 34.5) {
    return 'obesidade grau I';
  }
  if (imc >= 35 && imc <= 39.9) {
    return 'obesidade grau II';
  }
  if (imc = 40) {
    return 'obesidade grau III'
  }
  return 'obesidade grau IV';
}

const imcCalc = () => {
  const weight = readline.questionFloat('Qual seu peso? ');
  const height = readline.questionFloat('Qual sua altura em metros? ');

  const imc = weight / (height * height);

  const result = imcResult(imc);

  return console.log(`Seu IMC é: ${imc}. E a sua situção: ${result}`);
}

module.export = imcCalc;