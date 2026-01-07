const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((numero) => {
  return numero % 2 == 0;
});

const numerosImpares = numeros.filter((numero) => {
  return numero % 2 != 0;
});

console.log('Todos os numeros', numeros);
console.log('Todos os numeros pares', numerosPares);
console.log('Todos os numeros impares', numerosImpares);

const numerosDobrados = numeros.map((numero) => {
  return numero * 2;
});

console.log('lista mapeada: ', numerosDobrados);
