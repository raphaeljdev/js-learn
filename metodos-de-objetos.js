const pessoa = {
  nome: 'Raphael',
  idade: 20,
  pets: ['Eros'],
  nacionalidade: 'Brasileiro',
};

for (const chave in pessoa) {
  console.log('Chave: ', chave);
  console.log('Valor: ', pessoa[chave]);
}

const chaves = Object.keys(pessoa);
const valores = Object.values(pessoa);

const entradas = Object.entries(pessoa);

console.log('chaves: ', chaves);
console.log('valores: ', valores);
console.log('entradas: ', entradas);
