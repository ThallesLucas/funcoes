let n1 = parseInt(prompt("Digite o primeiro número"))
let n2 = parseInt(prompt("Digite o segundo número"))
let n3 = parseInt(prompt("Digite o terceiro número"))
let n4 = parseInt(prompt("Digite o quarto número"))

function media(n1, n2, n3, n4){
    return (n1+n2+n3+n4)/4
}

alert(`A média é ${media(n1, n2, n3, n4)}`)