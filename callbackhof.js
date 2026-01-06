// HOF -> Higher-order function === funcao que recebe outra funcao como parametro.

const calcular = (numero_um, numero_dois, operacao) => {
  return operacao(numero_um, numero_dois);
};

const soma = (numero_um, numero_dois) => {
  return numero_um + numero_dois;
};

const divisao = (numero_um, numero_dois) => {
  return numero_um / numero_dois;
};

const multiplicacao = (numero_um, numero_dois) => numero_um * numero_dois;

const subtracao = (numero_um, numero_dois) => numero_um - numero_dois;

const numeroSomado = calcular(5, 5, soma);
const numeroDividido = calcular(10, 2, divisao);
const numeroMultiplicado = calcular(10, 2, multiplicacao);
const numeroSubtraido = calcular(10, 2, subtracao);
console.log(numeroSomado);
console.log(numeroDividido);
console.log(numeroMultiplicado);
console.log(numeroSubtraido);
