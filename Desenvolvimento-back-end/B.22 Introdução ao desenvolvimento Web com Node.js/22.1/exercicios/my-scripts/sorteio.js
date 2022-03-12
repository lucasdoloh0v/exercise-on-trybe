const readline = require('readline-sync');

const result = (randomNumber, userNumber) => {
  if (userNumber === randomNumber) {
    return console.log('Parabéns, número correto!');
  }
  return console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
}

const raffle = () => {
  const randomNumber = Math.floor(Math.random() * (10 + 1));
  const userNumber = readline.questionInt('Qual seu numero da sorte? ');
  
  result(randomNumber, userNumber);

  const answer = readline.question('Se deseja jogar novamente digite s, e para não digite qualquer coisa ');
  if (answer != 's') return console.log('Tudo bem!');
  raffle();
}

raffle();
