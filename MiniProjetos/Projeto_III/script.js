function verifica(){
   
    var inicio = window.document.getElementById('iComeca')

    var termina = window.document.getElementById('iTermina')

    var pula = window.document.getElementById('iPula')

    var msg = window.document.getElementById('msg')

    var n1 = Number(inicio.value)
    var n2 = Number(termina.value)
    var n3 = Number(pula.value)

    msg.innerHTML = ' '

    if(n1 > n2 || n3 > n2){
        msg.innerHTML =`Impossivel realizar a conta pois ${n1} ou ${n3} é maior que ${n2} `
    }else{
      for(var i = n1; i <= n2; i += n3)
        msg.innerHTML += `${i} ` 
    }


    // `
}