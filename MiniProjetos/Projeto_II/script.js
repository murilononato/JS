function Verifica(){
    var idade = window.document.getElementById('iAno')

    var data = new Date()
    var ano = data.getFullYear() // Pega o ano todo os 4 digitos '2022'
    var rest = window.document.querySelector('div#res')

    if(idade.value.length == 0 || idade.value > ano){
        window.alert('Algo de errado não esta certo...')
    } else {
        var sex = document.getElementsByName('sexo')
        var genero = ''

        var calc = ano - Number(idade.value)

        if(sex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
    } 

    rest.style.textAling = 'center'
    rest.innerHTML = `Detectamos ${genero} com ${calc}`
}