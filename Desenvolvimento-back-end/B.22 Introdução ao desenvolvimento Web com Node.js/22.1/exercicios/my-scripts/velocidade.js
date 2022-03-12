const readline = require('readline-sync');

const avgSpeed = () => {
  const dist = readline.questionInt('Qual a distancia, em metros, que você percorreu? ');
  const time = readline.questionInt('Em quanto tempo, em segundos, a distancia foi percorrida? ');

  const avgSpeedM = dist / time;
  const avgSpeedKM = avgSpeedM * 3.6;

  return console.log(`A velocidade média foi: ${avgSpeedM.toFixed(2)} m/s ou ${avgSpeedKM} km/h`);
}

avgSpeed();
