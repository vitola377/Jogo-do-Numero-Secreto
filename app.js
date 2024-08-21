let listaDeNumerosSorteados=[];
let numeroLimite=10;
let numeroSecreto=numeroAleatorio();
let tentativa=1
function exibirTextoNaTela(tag, texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirTextoInicial(){
exibirTextoNaTela('h1', 'Jogo do numero Secreto')
exibirTextoNaTela('p', 'Escolha um numero entre 1 a 10')
}
exibirTextoInicial();

function verificarChute(){
    let chute=document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens!!!');
        let palavraTentativa=tentativa>1?'tentativas':'tentativa';
        let mensagemTentativa=`vc acertou com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        let erros=chute<numeroSecreto?'maior':'menor';
        let mensagemDeErro=`o numero secreto é ${erros} que ${chute}`;
        if(chute>numeroSecreto){
            exibirTextoNaTela('p', mensagemDeErro)
        }else{
            exibirTextoNaTela('p', mensagemDeErro)
        }
        tentativa++;
        limparCampo();
    }
}
function numeroAleatorio(){
    let numeroEscolhido= parseInt(Math.random()*numeroLimite+1);
    let quantidadeElementosNaLista=listaDeNumerosSorteados.length;
    if (quantidadeElementosNaLista==numeroLimite){
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute=document.querySelector('input');
    chute.value='';
}
function reiniciarJogo(){
    numeroSecreto=numeroAleatorio();
    limparCampo();
    tentativa=1;
    exibirTextoInicial();
    document.getElementById('reiniciar').getAttribute('disabled', true);
}

