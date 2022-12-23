function parimpar(valor){
    if(valor%2 == 0){
        return `${valor} é um numero par!`
    }else{
        return `${valor} é um numero impar!`
    }
}

let res = parimpar(11)
let res2 = parimpar(12)
console.log(res)
console.log(res2)
