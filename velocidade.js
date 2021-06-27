const readline = require('readline-sync');

const distancia = readline.questionInt('Qual é a distância? ');
const tempo = readline.questionInt('Qual é o tempo?');

const velocidade = (distancia, tempo) => {
  const media =  distancia/tempo;
  return `A velocidade media é ${media.toFixed(2)} metros/segundos`;
}

console.log(velocidade(distancia, tempo));
