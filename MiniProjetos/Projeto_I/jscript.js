
function carregar(){

var msg = window.document.getElementById('msg')

var img = window.document.getElementById('imagem')

var data = new Date()

var hora = data.getHours()

var min = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${min}`

if(hora >= 0 && hora < 12){
    img.src = 'img/dia.jpg'
    document.body.style.background = '#F0CA4B'
} else if (hora >= 12 && hora < 18){
    img.src = 'img/tarde.jpg'
    document.body.style.background = '#F08A48'
} else{
    img.src = 'img/noite.jpg'
    document.body.style.background = '#2A428A'
}
}