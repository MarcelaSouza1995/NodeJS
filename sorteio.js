const readline = require('readline-sync');

const numero = readline.questionInt('Qual é a sua aposta? ');
const numeroSorteado = parseInt(Math.random() * 10); 

const confereResultado = (numero, numeroSorteado) => {
  return numero === numeroSorteado ? `Parabéns, número correto!` : `Opa, não foi dessa vez. O número era ${numeroSorteado}`;
}

console.log(confereResultado(numero, numeroSorteado));