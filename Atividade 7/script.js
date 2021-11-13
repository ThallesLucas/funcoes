const ano = 2021;

let nome = prompt("Digite seu nome");

let nascimento = prompt("Digite seu ano de nascimento");



function idade(a, n){
    return a - n
}

alert(`Olá, seu nome é ${nome} e você tem ${idade(ano, nascimento)} anos.`);