// 1. Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

const { exec } = require('node:child_process');

const saudacao = () => console.log('Olá! Seja bem-vindo(a)!');
saudacao();

// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

const apresentarPessoa = (nome, idade) =>
  console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);
apresentarPessoa('Raphael', 20);

// 3. Cálculo de IMC
// Crie uma função que receba peso e altura e retorne o valor do IMC. Mostre também uma frase com o resultado.

const calculaImc = (peso, altura) => {
  imc = peso / altura ** 2;
  console.log(`Seu IMC: ${imc}`);
};
calculaImc(70, 1.7);

// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

const verificarAprovacao = (nota) =>
  nota >= 7 ? console.log('Aprovado') : console.log('Reprovado');
verificarAprovacao(7);

// 5. Número par ou ímpar
// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

const ehPar = (numero) =>
  numero % 2 == 0 ? console.log(true) : console.log(false);
ehPar(3);

// 6. Função soma
// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.

const soma = (numero1, numero2) =>
  console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
soma(2, 7);

// 7. Reutilizando código
// Reescreva o exercício da calculadora de troco usando uma função calcularTroco(compra, pagamento).

const calcularTroco = (compra, pagamento) => {
  if (pagamento < compra) {
    console.log('Saldo insuficiente.');
  } else {
    console.log(`Troco a receber: R$ ${pagamento - compra}`);
  }
};
calcularTroco(500, 500);

// 8. Arrow function
// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

// feito na propria questao.

// 9. Callback simples
// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

const executarAcao = (acao) => acao();

executarAcao(() => {
  console.log('Executando!');
});

// 10. Desafio do quiz
// Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

// feito na propria questao.
