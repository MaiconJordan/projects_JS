var n1 = prompt("Digite um numero")
n1 = parseInt(n1)


escreve();

function escreve(){
    var output = document.querySelector('#output');
    output.innerHTML = n1
}

function mais() {
    var n = prompt('some um numero')
    n = parseInt(n)

    n1 = n1 + n;
    escreve()

    
}
function dividir() {
    var n = prompt('divida um numero')
    n = parseInt(n)

    n1 = n1 / n;
    escreve()

    
}

function multiplicar() {
    var n = prompt('multiplique  um numero')
    n = parseInt(n)

    n1 = n1 * n;
    escreve()

    
}

function menos() {
    var n = prompt('subtraia um numero')
    n = parseInt(n)

    n1 = n1 - n;
    escreve()

    
}








