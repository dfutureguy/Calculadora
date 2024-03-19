///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculadora(num1,num2,operador){
  //declaração de variáveis
  let resultado
  let i

  //multiplicação  
  if (operador==="*"){
    resultado = Number(num1)*Number(num2)
//divisão
  }else if(operador==="/"){
    resultado = Number(num1)/Number(num2)
//soma
  }else if(operador==="+"){
    resultado = Number(num1)+Number(num2)
//subtração
  }else if(operador==="-"){
    resultado = Number(num1)-Number(num2)
//exponenciação
  }else if(operador==="e"){
    i = 1;
    resultado = Number(num1);
    while(i<Number(num2)){
      resultado = resultado*Number(num1)
      i++;
    }
  }
//resultado  
  if (resultado>1000000 || resultado == undefined)
    resultado = "ERRO"
    return resultado;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = calculadora(numeros[0], numeros[1], operador)
}