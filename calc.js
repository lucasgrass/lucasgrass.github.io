var variable;
var resultado;

function onLoad() {
    document.calc.visor.value = "0";
    variable = 0;
    resultado = 0;
}

function onClick(button) {
    if (visor.value == 0){
        document.calc.visor.value = "";
    }
   variable = document.calc.visor.value += button;
}

function invert() {
    result();
    resultado = eval(resultado*(-1));
    document.calc.visor.value = resultado;
    variable = resultado;
}

function porcentagem(){
    result();
    resultado = eval(resultado/100);
    document.calc.visor.value = resultado
    variable = resultado;
}

function result() {
    resultado = eval(variable);
    document.calc.visor.value = resultado;
}