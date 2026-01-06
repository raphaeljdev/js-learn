const readline = require('readline');

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

leitor.question('qual eh o seu nome?', (nome) => {
  console.log(`ola ${nome}`);
  console.log('boas vindas ao nosso sistema!');

  leitor.question('qual eh a sua idade?', (idade) => {
    idade > 18
      ? console.log('Voce ja pode tirar sua cnh')
      : console.log('voce ainda nao pode tirar sua cnh');
    leitor.close();
  });
});
