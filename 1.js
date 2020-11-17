var D1;
var D2;

/* Calculo de los dados */
function CalcularDados(){
    D1 = parseInt(Math.random() * (6 - 0) + 1);
    D2 = parseInt(Math.random() * (6 - 0) + 1);
    alert("Dado 1: "+D1+" Dado 2: "+D2);
}

function CambiarResultadoDado(Dado){
    switch(Dado){
        case 1: return "N1";
        case 2: return "N2";
        case 3: return "N3";
        case 4: return "N4";
        case 5: return "N5";
        case 6: return "N6";
    }
}

function AnimacionDados(){
    CalcularDados();
    var Desvanecido = document.getElementById("Animacion-Dados");
    var Dado1 = document.getElementById("Dado1");
    var Dado2 = document.getElementById("Dado2");

    Desvanecido.classList.toggle("Desvanecido");
    Dado1.classList.toggle(CambiarResultadoDado(D1));
    Dado2.classList.toggle(CambiarResultadoDado(D2));

    setTimeout(function(){
        Desvanecido.classList.toggle("Desvanecido");
        Dado1.classList.toggle(CambiarResultadoDado(D1));
        Dado2.classList.toggle(CambiarResultadoDado(D2));
    },5000);     
}