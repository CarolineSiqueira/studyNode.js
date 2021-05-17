var nomeCalc = "Minha calculadora";

function soma(a,b){
    return a + b;
}
function divisao(a,b){
    return a / b;
}

function mult(a,b){
    return a * b;
}

function sub(a,b){
    return a - b;
}



module.exports = {
    soma,
    divisao,
    mult,
    sub,
    nomeCalc
};