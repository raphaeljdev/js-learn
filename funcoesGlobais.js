const saudacao = () => console.log('Eae beleza?');

// setTimeout(saudacao, 2000);

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log(contador);
  contador == 10 ? clearInterval(id) : console.log('espera...');
}, 1000);
