function desativaProdutoAtivo(){
    const produtoAtivo = document.querySelector('.small-images .active');
    if(produtoAtivo === null){
    }else{
        produtoAtivo.classList.remove('active');
    }
}

function trocarImagem(nome){
    const imagem = document.querySelector('.main-image img')
    const caminhoAtual = imagem.src;
    const caminhoProvisorio = caminhoAtual.split('img/');
    const novoCaminho = `${caminhoProvisorio[0]}img/${nome}.png`
    imagem.src = novoCaminho
}

function mudarTexto(cor){
    const texto = document.querySelector('.text-color h1');
    texto.innerHTML = cor;
    texto.style.color = cor;
}

function mudarBotao(cor){
    const botao = document.querySelector('.right-content button');
    botao.style.background = cor;
}

function mudarFundo(cor){
    const fundo = document.querySelector('body');
    fundo.style.background =  `linear-gradient(45deg, white 81%, ${cor} 72%)`
}

function mudarNomeProduto(texto){
    const titulo = document.querySelector('.right-content h2');
    titulo.innerHTML = texto;
}

const produtos = document.querySelector('.small-images img');

produtos.addEventListener('click', () => {

    //produtos.classList.remove('.active');
    //produtos.classList.add('active');
    console.log(produtos.dataset.color)
})

function trocarProduto(element){
    desativaProdutoAtivo()

    element.classList.add('active')

    trocarImagem(element.dataset.title)
    mudarTexto(element.dataset.color)
    mudarBotao(element.dataset.color)
    mudarFundo(element.dataset.color)
    mudarNomeProduto(element.dataset.title)
}