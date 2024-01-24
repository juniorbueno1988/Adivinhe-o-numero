alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let chute;
let tentativas = 0;

while (true) {
    tentativas++;
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute === null) {
        alert('Jogo cancelado.');
        break;
    }

    if (isNaN(chute)) {
        alert('Por favor, insira um número válido.');
        continue;
    }

    chute = parseInt(chute);

    if (chute === numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
if (chute !== null) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);
} else {
    alert('Até a próxima!');
}
