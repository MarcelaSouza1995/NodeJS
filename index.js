const readline = require('readline-sync');

const name = readline.question('Qual é o seu nome? ');
const age = readline.questionInt('Quantos anos você tem?'); // só aceita números inteiros nos inputs

console.log(`Olá, ${name}! Você tem ${age} anos!`);