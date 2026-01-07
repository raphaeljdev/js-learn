// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.

const pessoa = {
  nome: 'Raphael',
  idade: 20,
  profissao: 'Desenvolvedor',
};

// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
console.log(pessoa);
console.log(pessoa.nome);

// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.

pessoa.idade = 21;
console.log('Apos alteracao da idade: ', pessoa.idade);

// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".

pessoa.cidade = 'Sao paulo';
console.log(pessoa);
console.log(pessoa.cidade);

// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

const apresentarPessoa = () => {
  return `Eu me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}.`;
};

console.log(apresentarPessoa());

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.

const pessoas = [
  { nome: 'Raphael', idade: 13, profissao: 'Programador' },
  { nome: 'Sophia', idade: 20, profissao: 'Medica' },
  { nome: 'Danyella', idade: 28, profissao: 'Contadora' },
];

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

for (let pessoa of pessoas) {
  pessoa.idade > 18 ? console.log(pessoa.nome) : console.log('pulando');
}

// 8. Objeto com método
// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.

const usuario = {
  nome: 'Amygdala',
  saudacao: () => {
    console.log('Bem vindo', usuario.nome, '!');
  },
};

usuario.saudacao();

// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

for (let propriedades in pessoa) {
  console.log('Propriedades: ', propriedades);
  console.log('Valores: ', pessoa[propriedades]);
}

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {
  preco: 1000,
  quantidade: 4,
  valorTotal: () => {
    return produto.preco * produto.quantidade;
  },
};

console.log('valor total: ', produto.valorTotal());
