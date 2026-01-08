//aqui eu criei um var para selecionar todas as div com nome "ano"
const anoBotao = document.querySelectorAll('.ano');

//aqui a mesma coisa, só que chamo uma div de cada
const anoDestaque = document.querySelector('.ano-destaque');//aqui puxa os anos em destaque
const titulo = document.querySelector('.dinastia-texto h2');
const texto = document.querySelector('.dinastia-texto p');
const imagem = document.querySelector('.dinastia-imagem img');
const listaConquista = document.querySelector('.listaConquista');

console.log(anoBotao);
//aqui eu testei no terminal pra ve se funciona

//for each serve para 
 anoBotao.forEach((botao) => {
    botao.addEventListener('click', () => {
        // remover ativo de todos
        anoBotao.forEach((b) => b.classList.remove('ativo'));

        // adicionar ativo só ao clicado
        botao.classList.add('ativo');

        // descobrir qual ano clicou
        const ano = botao.textContent;

        // trocar conteúdo
        if (ano === '1991') {
            anoDestaque.textContent = '1991';
            titulo.textContent = 'O INÍCIO DA LENDA';
            texto.textContent = 'Depois de anos sendo parado pelos Pistons, Michael Jordan finalmente conquistou seu primeiro título da NBA. Não foi apenas uma vitória, foi o nascimento de uma dinastia.';
            imagem.src = 'Img/champion1.jpg';  
            listaConquista.innerHTML = '<li>🏆 Primeiro título da NBA<li> <li>⭐ MVP das FINAIS<li> <li>🏀 Bulls vencem o Lakers</li>';
                }

        if (ano === '1992') {
            anoDestaque.textContent = '1992';
            titulo.textContent = 'O DOMÍNIO CONTINUA';
            texto.textContent = 'Jordan e os Bulls conquistam o segundo título consecutivo, reafirmando sua supremacia na NBA. Vencendo o Portland Blazer de Drexler com recorde de arremesso em finais.';
            imagem.src = 'Img/champion2.jpg';
            //o innerHTML mexe direto com a HTML, textcontent somente UM texto
            listaConquista.innerHTML = '<li>🏆 Segundo título da NBA<li> <li>⭐ MVP das FINAIS pela 2 vez<li> 🏀Sua famosa comemoração "SHRUG". </li>';
        }
        
        if (ano === '1993') {
          anoDestaque.textContent = '1993';
          titulo.textContent = 'A SUPERAÇÃO DE JORDAN';
          imagem.src = 'Img/champion3.jpg'
          texto.textContent = 'Após ser campeão e as comparações com Drexler. Jordan foi comparado com Charles Barkely, dizendo que era superior a Jordan, mas Michael não deixou barato. Finalizando a série e conquistando seu terceiro titulo seguido. '
          listaConquista.innerHTML = '<li>🏆Terceiro Titulo SEGUIDO<li> <li>⭐MVP com médias de 30pt por jogo<li> <li>🏀A ERA JORDAN '
        }


        if (ano === '1996') {
            anoDestaque.textContent = '1996';
            titulo.textContent = 'RECORDE HISTORICO';
            imagem.src = 'Img/Champion4.jpg';
            texto.textContent = "Com a volta de sua aposentadora, Bulls conseguiu o recorde de 72 vitorias em 82 jogos, sendo o melhor time da historia e ainda campeão mostrando o que era a dinastia de Jordan."
            listaConquista.innerHTML = '<li>🏆Quarto Titulo<li><li>⭐MVP das Finais<li>'
        }

        if (ano === '1997') {
            anoDestaque.textContent = '1997';
            titulo.textContent = 'O GOAT';
            imagem.src = 'Img/allstar.jpg';
            texto.textContent = "Jordan já não era apenas uma lenda, era o GOAT. Seu quinto titulo afirma isso, seu curriculo fala por ele. Jordan mais uma vez MVP, Campeão e Cestinha ."
            listaConquista.innerHTML = '<li>🏆Quinto Titulo<li><li>⭐MVP das Finais<li>'
        }

    });
});

