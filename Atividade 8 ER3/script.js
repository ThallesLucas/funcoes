
let num1 = parseInt(prompt("Digite o valor inicial: "))
let num2 = parseInt(prompt("Digite o valor final: "))
let soma = 0

for(let i = num1; i <= num2; i++){
        if(i%2!==0){
                soma += i
        }
}

alert(`A soma é ${soma}`)