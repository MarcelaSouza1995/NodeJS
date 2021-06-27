const readline = require('readline-sync');

const altura = readline.questionFloat('Qual é a sua altura?');
const peso = readline.questionInt('Qual é o seu peso?');

const calculaImc = (altura, peso) => {
const imc1 = peso / (altura * altura);
const imc = imc1.toFixed(2);


if(imc < 18.5){
  return `Imc ${imc}: Abaixo do Peso`
}else if(imc > 18.5 && imc < 24.9){
  return `Imc ${imc}: Peso Normal`
}else if(imc > 25 && imc < 29.9){
  return `Imc ${imc}: Sobrepeso`
}else if(imc > 30 && imc < 34.5){
  return `Imc ${imc}: Obesidade Grau I`
}else if(imc > 35 && imc < 39.9){
  return `Imc ${imc}: Obesidade Grau II`
}else{
  return `Imc ${imc}: Obesidade Grau III ou Mórbida`
}

}

console.log(calculaImc(altura, peso));