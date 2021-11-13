
let num1 = parseInt(prompt("Digite o valor inicial: "))
let num2 = parseInt(prompt("Digite o valor final: "))


function soma(num1, num2){
        let soma = 0
        for(let i = num1; i <= num2; i++){
                if(i%2!==0){
                        soma += i
                }
        }
        return soma
}


alert(`A soma é ${soma(num1, num2)}`)