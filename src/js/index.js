const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click',() => {

        desativarBotaoSelecionado();
        
        botao.classList.add('selecionado');

        esconderImagemAtivo();
        
        imagens[indice].classList.add('ativo');
        

    })
})
  
function esconderImagemAtivo() {
    const imagemAtivo = document.querySelector('.ativo');

    imagemAtivo.classList.remove('ativo');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

