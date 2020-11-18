/* Calculo de los dados */
function CalcularDados(){
    const D1 = parseInt(Math.random() * (6 - 0) + 1);
    const D2 = parseInt(Math.random() * (6 - 0) + 1);
    console.log(`Dado 1: ${D1} Dado 2: ${D2}`);
    return { D1, D2 }
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
    const { D1, D2 } = CalcularDados();
    const Dado1 = document.getElementById("Dado1");
    const Dado2 = document.getElementById("Dado2");
    
    Dado1.className = '';
    Dado2.className = '';
    setTimeout(function(){
        
        Dado1.className = 'cubo ' + CambiarResultadoDado(D1);
        Dado2.className = 'cubo ' + CambiarResultadoDado(D2);
    },50)
    

    

    
}