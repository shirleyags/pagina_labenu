const botao = document.querySelector('.botao');
botao.addEventListener('click', (event) =>{
    event.preventDefault();
    
    const form = document.querySelector(".rodape_form");
    const principalPagina = document.querySelector(".principal");
    const faixaMensagem = document.createElement("p");
    faixaMensagem.classList.add("faixaBoasVindas");
    
    
    const formEmail = document.querySelector('#email');
    const conteudoEmail = formEmail.value;
    const verificarArroba = conteudoEmail.indexOf('@') == -1;
    const pontoArrobaAoMenosUm = conteudoEmail.lastIndexOf(".")==-1;

    if(conteudoEmail === ''){
        alert("Digite um e-mail!");
    }else if(verificarArroba ||pontoArrobaAoMenosUm){
        alert("Email inválido!");
    }
    else{
        alert("O email "+conteudoEmail+" foi enviado! Nós, da LaBeNu, agradecemos! :-)");
        faixaMensagem.textContent ="Seja bem-vindx a Labenu, "+conteudoEmail+"!";
        principalPagina.insertBefore(faixaMensagem,principalPagina.childNodes[0]);
    }
    form.reset();
})