const frutas = ['uva', 'banana', 'kiwi', 'laranja', 'morango'];
// console.log(frutas[0]);
// console.log(frutas.length);
// frutas.push('melancia');
// console.log(frutas.length);
// console.log(frutas[frutas.length - 1]);

// frutas.splice(2, 1);
// console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(`Indice: ${i}`);
  console.log(frutas[i]);
}

frutas.forEach((valor, indice) => {
  console.log('indice: ', indice, valor);
});

for (const fruta of frutas) {
  console.log(fruta);
}
