function converter(resposta) {
    return resposta.json();
}

function mostrarResultado(resultadoLogin, erro) {
    if (resultadoLogin == "Email incorreto") {
        alert("[ERRO]\nDados incorretos!")
    }else{
        window.location.href = "http://google.com.br";
    }
    //window.location.href = "http://google.com.br";
}



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

