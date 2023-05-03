const numeroAdivinar = Math.floor(Math.random() * 200) + 1;

let intentos = 5;


function Adivina() {

    const numeroUser = document.getElementById('numeroUser').value;

    if (numeroUser < numeroAdivinar) {
        document.getElementById('resultado').textContent = 'El número es mayor';
    } else if (numeroUser > numeroAdivinar) {
        document.getElementById('resultado').textContent = 'El número es menor';
    } else {
        document.getElementById('resultado').textContent = '¡Felicidades! Adivinaste el número';

        document.getElementsByTagName('button')[0].disabled = true;
    }

    intentos--;
    if (intentos === 0) {
        document.getElementById('resultado').textContent = `No adivinaste el número. El número correcto era ${numeroAdivinar}`;

        document.getElementsByTagName('button')[0].disabled = true;
    }
}