function mostrarValorDoInput(){
    console.log(texto.value);
}

function gerarNome(){
    if(dispatchEvent.value==""){
        alert("informe o dia");
        return;
    }
}

let nome = "";

if(dia.value >= 1 && dia.value <= 8){
    nome = "Desenvolvedor(a)"
};
else if(dia.value >= 9 && dia.value <= 18){
    nome = "Programador(a)"}
else if(dia.value >= 19 && dia.value <= 26){
    nome = "Estagiario(a)"};
else {
    nome = "Senior(a)"
};

