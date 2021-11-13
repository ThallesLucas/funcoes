let saldo = parseInt(prompt("Digite aqui o seu saldo"))
let compra = parseInt(prompt("Digite aqui o valor da compra"))

function transação(s, c){
        return s - c
}

if(saldo > compra){
alert(`Compra efetuada com sucesso! Restam R$ ${transação(saldo, compra)}`)
}

else if(saldo < compra){
    alert("Saldo insuficiente")
}
