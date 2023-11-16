let listaNumerosSorteados = [];
let limiteNumeros = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
    
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteNumeros}`);

}
exibirMensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1  ?  'tentativas' : 'tentativa';
        let mensagemTentativas = `Vc acertou com ${tentativas} ${palavraTentativa}`;
        
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo()
        }
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
    let quantidadeNumerosNaLista = listaNumerosSorteados.length;
    
    if (quantidadeNumerosNaLista == limiteNumeros) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}