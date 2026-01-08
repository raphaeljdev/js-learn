const pessoa = {
  nome: 'raphael',
  idade: 20,
  profissao: 'desenvolvedor',
};

// console.log(pessoa.nome);
// console.log(pessoa.idade);

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

const saudacao = () => console.log('ola', nome);

saudacao();
