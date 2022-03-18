let segundos = 0;
let intervalo;

verificar = () => {
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `Tempo: ${--segundos}`
    
    if(segundos <= 0){
        resultado.innerHTML = "Tempo esgotado!";
        clearInterval(intervalo);
    }

}

iniciarCronometro = () => {

    let number = document.getElementById("numerico").value;
    
    segundos = parseInt(number);

    intervalo = setInterval(verificar,1000);
}
