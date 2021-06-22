function createMath() {
    var n1 = prompt('digite um numero inteiro')
    n1 = parseInt(n1)
    
    clearMath()

    indice = 1

    while( indice <= 10) {
        
        mensagem += 'o numero' + n1 + 'x ' + indice + '= ' + (n1 * indice) +'<br>'
        indice++
    }
   
    output.innerHTML = mensagem
}

    function clearMath(){
        mensagem = ''
        output.innerHTML = mensagem
    }


var output = document.querySelector('#output');

var mensagem = '';