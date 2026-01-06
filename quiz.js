const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Bem vindo ao quiz de JavaScript');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;
let erros = 0;

rl.question(
  '(1) - Qual palavra usamos para criar uma função?\na) define\nb) function\nc) create\n',
  (resposta1) => {
    if (resposta1 != null) {
      resposta1 == 'b' ? acertos++ : erros++;
    } else {
      erros++;
    }
    rl.question(
      '(2) - Qual dessas é uma estrutura de repetição?\na) loopar\nb) repeat\nc) for\n',
      (resposta2) => {
        if (resposta2 != null) {
          resposta2 == 'c' ? acertos++ : erros++;
        } else {
          erros++;
        }
        rl.question(
          '(3) - Qual valor é considerao falsy em JavaScript?\na) 1\nb) 0\nc) "texto"\n',
          (resposta3) => {
            if (resposta3 != null) {
              resposta3 == 'b' ? acertos++ : erros++;
            } else {
              erros++;
            }
            rl.close();
            console.log(`Você acertou ${acertos} e errou ${erros}!`);
          },
        );
      },
    );
  },
);
