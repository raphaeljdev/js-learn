const pessoa = {
  nome: 'Raphael',
  idade: 20,
  temCNH: true,
};

pessoa.sobrenome = 'Paiva';

console.log('Nome: ', pessoa.nome);
console.log('Sobrenome: ', pessoa.sobrenome);

const livro = {
  titulo: 'Breves respostas para grandes questoes',
  // autor: 'Stephen Hawking',
  paginas: 230,
};

livro.publicado = true;
livro.idiomas = ['Ingles', 'Portugues', 'Espanhol'];

livro.idiomas.push('Mandarim');
livro.idiomas.push('Frances');

console.log('Livro antes: ', livro);

delete livro.paginas;

console.log('Livro depois: ', livro);

console.log('Autor: ', livro['autor']);

const autor = {
  nome: 'Stephen Hawking',
  nacionalidade: 'Britanico',
  idade: 76,
};

console.log('Autor: ', autor);

livro.autor = autor;

console.log(livro);
livro.autor.nacionalidade;
livro.autor.nome;
