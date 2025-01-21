// substitui o texto na seção definidade pela tag
function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.7; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

// gera número máximo
function geraNumeroMaximo()
{
    return parseInt(Math.random() * 50 + 1);   
}

// gera numrero secreto
function gerarNumeroAleatorio()
{
    return parseInt(Math.random() * numeroTotalSecreto + 1);
}

// função de limpar o campo digitado
function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

// Chamadas das funções nas variáveis
function novoJogo()
{
    console.log('novo jogo');
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    tentativas = 1;
    numeroTotalSecreto = geraNumeroMaximo();
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagensInicial();
}

function exibirMensagensInicial()
{
    console.log(`Número secreto ${numeroSecreto}`);
    console.log(`Número máximo ${numeroTotalSecreto}`);  
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroTotalSecreto}`);
}

// inicia variaveis
let tentativas = 1;
let numeroTotalSecreto = geraNumeroMaximo();
let numeroSecreto = gerarNumeroAleatorio();
exibirMensagensInicial();


function verificarChute()
{
    let chute = document.querySelector('input').value;

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    console.log(`Chute ${tentativas} ${chute}`);

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) 
    {
        exibirTextoNaTela('h1', 'Você acertou');
        exibirTextoNaTela('p', `O número secreto ${chute} com ${tentativas} ${palavraTentativa} `);
        //alert(`Você acertou o número secreto ${chute}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
            //alert(`O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
           //alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
        }
}
