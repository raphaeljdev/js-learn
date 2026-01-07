// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = ['Raphael', 'Sophia', 'Danyella', 'Cleusa', 'Sonia'];

for (let i = 0; i < nomes.length; i++) {
  console.log('Indice: ', i);
  console.log(nomes[i]);
}

// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = ['Banana', 'Laranja', 'Kiwi'];
console.log(frutas);
frutas.push('Tomate');
console.log(frutas);
frutas.shift();
console.log(frutas);

// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

const cidades = ['Sao paulo', 'Guarulhos', 'Boituva'];
console.log('cidades: ', cidades.length);

// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
// }

// for (let numero of numeros) {
//   soma += numero;
// }

numeros.forEach((numero) => {
  soma += numero;
});

console.log('Soma total: ', soma);

// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [10, 10, 5, 6];
valorTotal = 0;
notas.forEach((nota) => {
  valorTotal += nota;
});
valorTotal / notas.length >= 7
  ? console.log('Aprovado')
  : console.log('Reprovado');

// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const userNames = ['Amygdala', 'Obscure', 'Aikoshima'];
userNames.forEach((userName) => {
  console.log(`Olá, ${userName}!`);
});

// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
const precosDeProdutos = [100, 200, 300];

const precoCorrigido = precosDeProdutos.map((precoComDesconto) => {
  return precoComDesconto * 0.9;
});

console.log(precoCorrigido);

// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [17, 18, 19, 20];

const idadesFiltradas = idades.filter((idade) => {
  return idade >= 18;
});

console.log(idadesFiltradas);

// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.

const precosDeProdutosCarrinhosDeCompras = [100, 200, 300, 400];
let somaDosProdutos = 0;
for (precoDeProdutoCarrinhosDeCompra of precosDeProdutosCarrinhosDeCompras) {
  somaDosProdutos += precoDeProdutoCarrinhosDeCompra;
}

console.log('valor total: ', somaDosProdutos);

// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.

console.log('valor com desconto: ', somaDosProdutos * 0.8);

// 10. Lista de tarefas
// Crie dois arrays:

// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

const tarefas = ['Limpar a casa', 'Fazer comida', 'Trocar agua do cachorro'];
const concluida = [true, false, true];

let tarefasPendentes = tarefas.filter((tarefa, index) => {
  return concluida[index] == false;
});

console.log('Tarefas pendentes: ', tarefasPendentes);
