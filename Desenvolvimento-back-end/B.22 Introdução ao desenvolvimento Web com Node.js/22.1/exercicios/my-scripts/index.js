const readline = require('readline-sync');

const selection = () => {
  console.log(`Esses são as funções disponíveis:
  1- calculadora de imc.
  2- Sorteio.
  3- velocidade média`);
  const answer = readline.questionInt('Digite o número correspondente a função para utiliza-la ');
  if (answer === 1) require('./imcCalc');
  if (answer === 2) require('./sorteio');
  if (answer === 3) require('./velocidade');
}

selection();