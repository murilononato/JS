var tab = document.getElementById('iLista')

var resultado = document.getElementById('iResultados')

var num = document.getElementById('num')

var msg = document.querySelector('div#res')

var valores = []

var teste = Number(num)

function add(){


    // if(isNumero(num.value) && !inLista(num.value , valores)){
        // valores.push(teste)
        // let item = document.createElement('option')
        // item.text = `Valor adicionado ${num.value}`
        // tab.appendChild(item)
    // }else{
    //     window.alert('Valor invalido')
    // }

    alert(`Teste ${num.value}`)

}


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){

        alert('1')
        return true
    } else {
        alert('2')
        return false

    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        alert('3')
        return true
    
    } else {
        alert('4')
        return false
     
    }
}



function Finaliza(){
  
}
