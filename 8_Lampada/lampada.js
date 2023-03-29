var lamp = window.document.getElementById('lampada')

function estarQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estarQuebrada()){
    lamp.src = 'ligada.svg'}
}


function Desligar(){
    if (!estarQuebrada()){
    lamp.src = 'desligada.svg'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'quebrada.svg'
}
