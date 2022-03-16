verificar = () => {

    let number = document.getElementById("numerico").value;
    let resultado = document.getElementById("resultado");
    let num = parseInt(number);

    resultado.innerHTML = ""
    resultado.innerHTML += `Tempo: ${--num}`
    
    if(num <= 0){
        resultado.innerHTML = "Tempo esgotado!";
        clearInterval(pararCron);
    }

}

pararCron = () => {
    let intervalo = setInterval(verificar,1000);
}
