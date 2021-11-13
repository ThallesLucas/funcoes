let num = parseInt(prompt("Quantos números você deseja calcular? de 1 à 4: "))

function media(num){
    let media = 0
    for(let i = 0; i<num; i++){
        let num = parseInt(prompt(`Digite o numero ${i+1}: `));
        media+= num;
    }
    return media/num;
}

alert(`A média é ${media(num)}`);