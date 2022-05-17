//obj 3 = Ao clicar no personagem aparecer na ul a palavra SELECIONADO junto com 1P e passar para o 2P fazendo novamente (parar de piscar o botao start)
//
const personagens = document.querySelectorAll('.personagem')


personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {
            const personagemSelecionado = document.querySelector('.jogador-1-selecionado')
            personagemSelecionado.classList.remove('jogador-1-selecionado')

            personagem.classList.add('jogador-1-selecionado')


            const idSelecionado = personagem.attributes.id.value;
            const imgJogador1 = document.getElementById('personagem-jogador-1');
            imgJogador1.src = `./src/imagens/${idSelecionado}.png`
            const dataName = personagem.getAttribute('data-name');
            const nomeJogador1 = document.getElementById('nome-personagem-1');

            nomeJogador1.innerHTML = `${dataName}`

        })
        
    
    
   
    personagem.addEventListener('click', () => {
     const personagemEscolhido = document.querySelector('.escolhido')

       
        if (personagemEscolhido == null) {
            personagem.classList.add('escolhido')
            
            
        }
        else{

            personagem.classList.remove('escolhido')
        }
    })
    
   
   
})
