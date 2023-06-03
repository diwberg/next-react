export function mega(qtd = 6, apostas = []){
    qtd = +qtd

    if(qtd < 6){
        qtd = 6
    }
    if(qtd > 60){
        qtd = 60
    }

    if(apostas.length  === qtd){
        return apostas.sort((n1, n2) => (n1 - n2)) 
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1

    if(!apostas.includes(numeroAleatorio)){
        return mega(qtd, [...apostas, numeroAleatorio])
    }else{
        return mega(qtd, apostas)
    }


}