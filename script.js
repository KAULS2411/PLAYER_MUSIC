let musicas = [
    {titulo:'O Cara de Óculos', artista:'DJONGA', src:'musicas/O cara de óculos - DJONGA.mp3', img:'imagens/capa album.jpg'},
    {titulo:'Oto Patamá', artista:'DJONGA', src:'musicas/Oto Patamá - DJONGA.mp3', img:'imagens/capa album 2.jpg'},
    {titulo:'Todo Errado', artista:'DJONGA', src:'musicas/Todo Errado - DJONGA.mp3', img:'imagens/capa album.jpg'}
];

let musica = document.querySelector('audio');

let duracaomusica = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomemusica = document.querySelector('.descrição h2');

let nomeartista = document.querySelector('.descrição i');

let indexmusica = 0;

duracaomusica.textContent = segundosparaminutos(Math.floor(musica.duration));

renderizarmusica(indexmusica);

//Eventos

document.querySelector('.anterior').addEventListener('click', () => {
    indexmusica--;
    if (indexmusica < 0) {
        indexmusica = 2;
    }
    renderizarmusica(indexmusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexmusica++;
    if (indexmusica > 2){
        indexmusica = 0;
    }
    renderizarmusica(indexmusica);
});


document.querySelector('.botao-play').addEventListener('click' , tocarMusica);

document.querySelector('.botao-pause').addEventListener('click' , pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);


//Funções
function renderizarmusica (index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomemusica.textContent = musicas[index].titulo;
        nomeartista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaomusica.textContent = segundosparaminutos(Math.floor(musica.duration))
    });
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}
function atualizarBarra(){
    let barra =  document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido =  document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosparaminutos( Math.floor (musica.currentTime));

}

function segundosparaminutos(segundos){
    let campominutos = Math.floor (segundos / 60);
    let camposegundos = segundos % 60;
    if (camposegundos < 10){
        camposegundos = '0' + camposegundos;

    }

    return campominutos+ ':' + camposegundos;

}





