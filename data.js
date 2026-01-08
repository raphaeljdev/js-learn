const agora = new Date();
console.log(agora);
console.log('Ano: ', agora.getFullYear());
console.log('Mes: ', agora.getMonth());
console.log('Dia do mes: ', agora.getDate());
console.log('Hora: ', agora.getHours());
console.log('Minutos: ', agora.getMinutes());

const nascimento = new Date(2004, 11, 2);
console.log(nascimento);

console.log('Data formatada (BR): ', nascimento.toLocaleDateString('pt-BR'));
console.log('Data formatada (US): ', nascimento.toLocaleDateString('en-US'));
