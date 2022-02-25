verificar = () =>{
    let ini = document.getElementById("ini").value;
    let fim = document.getElementById("fim").value;
    let pas = document.getElementById("pas").value;
    let res = document.getElementById("res");

    if(ini.length == 0 || fim.length == 0 || pas.length == 0) {
        res.innerHTML = `<p>Impossivel calcular.<br>Revise os dados!</p>`
    }else{
        let i = parseInt(ini);
        let f = parseInt(fim);
        let p = parseInt(pas);

        if(p <= 0){
            alert("Passo invalido.\nSubstituindo por 1")
            p = 1
        }
        if(i <= f){
            for(let c = i ; c <= f ; c += p){
                res.innerHTML += `${c},`
            }
        }
        if(i >= p){
            for( let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c},`
            }
        }
        res.value=""//tentei zerar o res dps de usar, nao deu muito certo kkkkk
    }
}
limpar = () => {
    let res = document.querySelector("#res");
    let p = document.querySelector("#res p");
    res.removeChild(p);
}