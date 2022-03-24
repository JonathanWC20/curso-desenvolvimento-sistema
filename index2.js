function converter(resposta) {
    return resposta.json();
}

let produtos = document.getElementById("produtos");

function mostrarDados(dados) {
    produtos.innerHTML = ""
    produtos.innerHTML += `<strong>Lista : <br></strong>`
    for( let index = 0 ; index < dados.length ; index++ ) {
        let produto = dados[index]
        produtos.innerHTML += `<li> Produto - ${produto.descricao}, Valor - ${produto.preco}, Disponivel - ${produto.disponivel}</li>`
    }
}

function carregarProdutos() {
    fetch("https://s3.sa-east-1.amazonaws.com/joby.public/produtos")
        .then(converter)
        .then(mostrarDados);
}

//https://s3.sa-east-1.amazonaws.com/joby.public/produtos