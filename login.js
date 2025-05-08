let matricula = window.document.getElementById('matricula')
let senha = document.getElementById('senha')
let ok = document.querySelector('button')
ok.addEventListener('click', () => {
    if (matricula.value !== '' && matricula.value !== null && senha.value !== '' && senha.value !== null)  {
        window.location.href = 'home.html'
        
    }else
    document.querySelector('p').innerHTML = 'Matrículas ou senha incorretos'
    
});