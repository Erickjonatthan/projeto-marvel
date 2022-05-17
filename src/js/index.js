//obj 3 = Ao clicar no personagem aparecer na ul a palavra SELECIONADO junto com 1P e passar para o 2P fazendo novamente (parar de piscar o botao start)
//


const personagens = document.querySelectorAll('.personagem')


personagens.forEach((personagem) => {
        personagem.addEventListener('mouseenter', () => {
           
            const personagemEscolhido1 = document.querySelector('.escolhido1')
            const idSelecionado = personagem.attributes.id.value;
           
            
            if(personagemEscolhido1 == null){
            const personagemSelecionado = document.querySelector('.jogador-1-selecionado')
            personagemSelecionado.classList.remove('jogador-1-selecionado')
            personagem.classList.add('jogador-1-selecionado')
       
                const imgJogador1 = document.getElementById('personagem-jogador-1');
                imgJogador1.src = `./src/imagens/${idSelecionado}.png`
                const dataName = personagem.getAttribute('data-name');
                const nomeJogador1 = document.getElementById('nome-personagem-1');
                
                nomeJogador1.innerHTML = `${dataName}`
               
               
            }
            
            else{      
                            
                    const personagemSelecionado = document.querySelector('.jogador-2-selecionado')
                    personagemSelecionado.classList.remove('jogador-2-selecionado')
                    personagem.classList.add('jogador-2-selecionado')
                    
                    const imgJogador2 = document.getElementById('personagem-jogador-2');
                    imgJogador2.src = `./src/imagens/${idSelecionado}.png`
                    const dataName = personagem.getAttribute('data-name');
                    const nomeJogador2 = document.getElementById('nome-personagem-2');
               
                    nomeJogador2.innerHTML = `${dataName}`
            
             

            }
           

        })
        
    
    
   
    personagem.addEventListener('click', () => {
        const personagemEscolhido1 = document.querySelector('.escolhido1')
        if (personagemEscolhido1 == null) {
            personagem.classList.add('escolhido1')
            
            
        }
        else{

            personagem.classList.remove('escolhido1')
            
           
        }
       
    })
    
    
})


