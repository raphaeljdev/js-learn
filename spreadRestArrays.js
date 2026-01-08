const frutas = ['Maca', 'Banana', 'Morango'];

const maisFrutas = ['Uva', 'Kiwi', 'Melancia'];

const clone = [...frutas];

const todasAsFrutas = [...frutas, ...maisFrutas];

frutas.push('Pitanga');

console.log(frutas);
console.log(maisFrutas);
console.log(clone);
console.log(todasAsFrutas);

const [primeira, segunda, ...restante] = todasAsFrutas;

console.log(primeira);
console.log(segunda);
console.log(restante);
