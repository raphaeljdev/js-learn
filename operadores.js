// 1. Verificação de maioridade
// Crie uma variável idade e verifique se a pessoa é maior de idade (18 anos ou mais). Mostre no console uma mensagem adequada.

let idade = 20;
if (idade >= 18) {
  console.log(`Idade: ${idade}. Maior de idade.`);
} else {
  console.log(`Idade: ${idade}. Menor de idade.`);
}

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".

let notaUm = 8;
let notaDois = 9;
let media = (notaUm + notaDois) / 2;

if (media >= 7) {
  console.log(`Média: ${media}. Aprovado`);
} else {
  console.log('Reprovado');
}

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.

let valorCompra = 35.9;
let valorPago = 50;
console.log(
  `Valor da compra: R$ ${valorCompra.toFixed(
    2,
  )}\nValor pago: R$ ${valorPago.toFixed(2)}.\nTroco a ser devolvido: R$ ${(
    valorPago - valorCompra
  ).toFixed(2)}`,
);

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.

let senhaUm = 1234;
let senhaDois = 123;
if (senhaUm == senhaDois) {
  console.log('Igual');
} else {
  console.log('Diferente');
}

// 5. Controle de faltas
// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.

const totalAulas = 80;
const faltas = 25;
const faltasMaximasPermitidas = totalAulas * 0.25;
if (faltas >= faltasMaximasPermitidas) {
  console.log(
    `Total de aulas: ${totalAulas}.\nTotal de faltas: ${faltas}.\nFaltas máximas permitidas: ${faltasMaximasPermitidas}.\nResultado: Reprovado`,
  );
} else {
  console.log(
    `Total de aulas: ${totalAulas}.\nTotal de faltas: ${faltas}.\nFaltas máximas permitidas: ${faltasMaximasPermitidas}.\nResultado: Aprovado`,
  );
}

// 6. Verificação de login
// Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.

let temLogin = true;
let temSenha = true;

if (temLogin && temSenha) {
  console.log('Acesso liberado.');
} else {
  console.log('Acesso negado.');
}

// 7. Valor negado
// Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.

let disponivel = true;
console.log(!disponivel);

// 8. Condições compostas
// Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.

let numeroUm = 12;
let numeroDois = 12;
if (numeroUm % 2 == 0 && numeroDois % 2 == 0 && numeroUm == numeroDois) {
  console.log('Os números são pares e iguais.');
} else {
  console.log('Os números não atendem todas as condições.');
}

// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."

console.log(`15% de 120 é igual a ${120 * 0.15}.`);

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.

console.log(
  `2 + 3 * 5 = ${
    2 + 3 * 5
  }. Resultado se dá devido a ordem de operadores. O correto seria fazer (2 + 3) * 5 que o resultado seria ${
    (2 + 3) * 5
  }.`,
);
