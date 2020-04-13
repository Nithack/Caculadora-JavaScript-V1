//Variaveis Globais

var valorMemoria = ""
var displayCache = ""
var calculo = ["",undefined,"",false,false]


//cacular
function calcular() {
    var soma= ""
    if(calculo[3] == true){ 
        switch (calculo[1]) {
            case "+":
                soma = Number(calculo[0]) + Number(calculo[2])
                clearAll()
                calculo[4] = true
                displayAtt(soma)
                break;
            case "-":
                soma = Number(calculo[0]) - Number(calculo[2])
                clearAll()
                calculo[4] = true
                displayAtt(soma)
                break;
            case "*":
                soma = Number(calculo[0]) * Number(calculo[2])
                clearAll()
                calculo[4] = true
                displayAtt(soma)
            break;
            default:
                soma = Number(calculo[0]) / Number(calculo[2])
                clearAll()
                calculo[4] = true
                displayAtt(soma)
                break;
        }
    }
    
}

//teclas
function pressNumber(num){
    if(calculo[3] == true){
        calculo[2] += num.innerHTML
        displayAtt(num.innerHTML)
        
    }else{
        calculo[4] = true
        displayAtt(num.innerHTML)
    }
}

function pressOperadores(op) {
    if(calculo[3] == false && calculo[4] == true){
        calculo[0] = valorMemoria
        calculo[1] = op.innerHTML
        calculo[3] = true
        clearMemory()
        displayAtt(op.innerHTML) 
        console.log(calculo);
        
    }else{displayAtt(op.innerHTML)}
}


//display
function displayAtt(conteudo) {
    if (valorMemoria.length -1  < 8){
    valorMemoria += conteudo
    displayCache += conteudo
    var display = document.querySelector('div.visor')
    display.innerHTML = displayCache }

}


//Funçoes de resete
function clearCalculo() {
    calculo = ["",undefined,"",false]
    
}
function clearTela() {
    displayCache = ""
}
function clearMemory() {
    valorMemoria = ""
 
}
function clearAll() {
    clearMemory()
    clearCalculo()
    clearTela()
    displayAtt("")
}