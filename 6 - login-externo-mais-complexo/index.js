function converter(resposta) {
    return resposta.json();
}

function mostrarResultado(resultadoLogin) {
    resultado.innerHTML = ""
    if(resultadoLogin == "Email incorreto"){
        resultado.innerHTML = `<p>[ERRO]<br>Não foi possível acessar o sistema.<br> Verifique as informações e tente novamente</p>`
    }else{
        resultado.innerHTML = `<p>Iniciando Login</p>`
        window.location.href = "http://google.com.br ";
    }
}

let resultado = document.getElementById("resultado");

function acessar() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let dados = {
        email: email,
        senha: senha
    };

    let configuracao = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    };

    fetch('https://sjufvhlfd6.execute-api.sa-east-1.amazonaws.com/default/template-lambda-dynamo', configuracao)
        .then(converter)
        .then(mostrarResultado);



}