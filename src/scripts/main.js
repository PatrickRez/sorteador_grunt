//Numros randomicos

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();//evento.preventDefault para nao atualizar a pagina
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;//numero randomico
        numeroAleatorio = Math.floor(numeroAleatorio + 1);//floor para media tirar ./, e dar numero inteiro

        document.getElementById('resultado-valor').innerText = numeroAleatorio;//innerText para alert
        document.querySelector('.resultado').style.display = 'block';//css para ativiçao 
    })
})