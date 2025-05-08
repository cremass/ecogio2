let msg1 = document.getElementById('msg1')
let data = new Date()
let hora = data.getHours()
if (hora > 12 && hora < 18){
    msg1.innerHTML = 'Boa Tarde'
}
if (hora < 12){
    msg1.innerHTML = 'Bom dia'
}
if (hora >= 18){
    msg1.innerHTML = 'Boa noite'
}