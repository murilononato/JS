let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        window.alert('Numero invalido! precisa ser de 0 a 100!')
        return false
    }
}

function inLista(n , l){
    if (l.indexOf(Number(n)) != -1){
        window.alert('Numero já adicionado a lista!')
        return true
    }else{
        return false
    }
}

function Total(n){
    if(n.length >= 10){
        window.alert('Valor Maximo alcançado!')
        finalizar()
        return false
    }else{
        return true
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value , valores ) && Total(valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Numero adicionado: ${num.value}!`
        lista.appendChild(item)
        res.innerHTML = ''
    }

    num.value = '' // limpa o valor que esta na caixa number apos apertar o botao
    num.focus() // deixa o cursos piscando na ultima caixa de entrada
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione pelo menos 1 valor a lista')
    }else{
        let quantidade = valores.length
        let soma = 0
        let media = 0
        // maior e menor num
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / valores.length
  
        res.innerHTML = `<p>A quantidade de numeros foi de:${quantidade}</p>`
        res.innerHTML += `<p>O maior numero foi : ${maior}</p>`
        res.innerHTML += `<p>O menor numero foi : ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi : ${soma}</p>`
        res.innerHTML += `<p>A media dos valores foi : ${media}</p>`
    }
}