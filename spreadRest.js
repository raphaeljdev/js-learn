let pessoa = {
  nome: 'Raphael',
  idade: 20,
  profissao: 'Desenvolvedor',
};

let pessoa2 = { ...pessoa };

pessoa2.idade = 99;

console.log(pessoa);
console.log(pessoa2);

pessoa = { ...pessoa2, profissao: 'Desenvolvedor Pleno', possuiCNH: true };

console.log(pessoa);

const { nome, ...restante } = pessoa;

console.log(nome);
console.log(restante);
