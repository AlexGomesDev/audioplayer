let audio = document.getElementById("audio");
let btnPlay = document.getElementById("btnPlay");
let btnDesmutado = document.getElementById("btnDesmutado");

// Escolhi deixar setado para carregar o audio em 50%.
audio.volume = 0.5;

// Função que pausa ou continua o áudio alterando o layout dos botões play/pause.
function playPause() {
    if (audio.paused == true) {
        audio.play();
        btnPlay.src = "./Assets/imagens/btn_pause.png";
    } else {
        audio.pause();
        btnPlay.src = "./Assets/imagens/btn_play.png";
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    btnPlay.src = "./Assets/imagens/btn_play.png";
}

// Função que verifica se o áudio está mutado 
function muted() {
    if (audio.muted == false) {
        audio.muted = true;
        btnDesmutado.src = "./Assets/imagens/btn_muted.png"
    } else {
        audio.muted = false;        
        btnDesmutado.src = "./Assets/imagens/btn_desmuted.png"
    }
}

function diminuir_vel() {
    audio.playbackRate += -0.1;
}

function aumentar_vel() {
    audio.playbackRate += 0.1;
}

// Aqui eu não sabia como criar uma barra para controlar o volume, mas olhando alguns
// trabalhos de colegas do curso, consegui compreender a lógica utilizada neste modelo.
function controle_volume(vol) {
    audio.volume = vol;
}

