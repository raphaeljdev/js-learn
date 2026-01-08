// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const pessoa = {
  nome: 'Raphael',
  idade: 20,
  email: 'raphael@gmail.com',
};

const { nome, idade, email } = pessoa;

console.log('Nome: ', nome);
console.log('Idade: ', idade);
console.log('Email: ', email);

// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.

const linguagens = ['portugues', 'ingles', 'espanhol'];

const [ling1, ling2, ling3] = linguagens;

console.log('Linguagem 1: ', ling1);
console.log('Linguagem 2: ', ling2);
console.log('Linguagem 3: ', ling3);

// 3. Rest operator em função
// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
// Utilize um laço for para somar todos os valores recebidos e retorne o total.

const somaTudo = (...numeros) => {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
};

console.log(somaTudo(1, 2, 3, 4));

// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.

const frutas1 = ['banana', 'manga', 'melancia'];
const frutas2 = ['uva', 'kiwi', 'pessego'];

const todasAsFrutas = [...frutas1, ...frutas2];

console.log(todasAsFrutas);

// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const dados1 = {
  nome: 'pedrin',
};

const dados2 = {
  idade: 60,
};

const perfil = { ...dados1, ...dados2 };

console.log(perfil);

// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

const saudacao = (nome = 'visitante') => {
  console.log('Ola', nome);
};

saudacao();
saudacao('raphael');

// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const hoje = new Date();
const diaDeHoje = hoje.getDate();
const mesAtual = hoje.getMonth() + 1;
const anoAtual = hoje.getFullYear();
console.log(`Hoje eh ${diaDeHoje}/${mesAtual}/${anoAtual}`);

// 8. Modularização com export/import
// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

// 9. Objeto com função construtora
// Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.

// 10. Método no objeto
// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.
