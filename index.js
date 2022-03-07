verificar = () => {
    let numero = document.getElementById("numero").value;
    let res = document.getElementById("resultado");

    if (numero.length == 0) {
        alert("[ERRO] Impossivel calcular.") 

    }else {
        let num = parseInt(numero);
        res.innerHTML = ""
        for (let c = 1; c <= 10; c++){
            let item = document.createElement("option");
            item.text = `${num} x ${c} = ${num * c}`
            res.appendChild(item)
        } 
    }
    num.focus() // tentei focar no input num
                // nao deu certo
}
