const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const fundo = document.querySelector('.game-board');
const nuvem = document.querySelector('.clouds');
const chao = document.querySelector('.chao');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
         
        mario.classList.remove('jump');
    
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition} px`;

        mario.src = 'imagens/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        fundo.style.background = 'black';
        fundo.style.border = 'none';
        
        nuvem.src = 'imagens/giphy.gif'
        nuvem.style.animation = 'none'
        nuvem.style.left = '35%';
        nuvem.style.top = '50%';

        chao.style.background = 'black';

        document.getElementById("restart").innerHTML="<button id = 'btn' onClick='window.location.reload();'><b>RESTART</b></button>";

        clearInterval(loop);

    }


}, 10)

document.addEventListener('keydown', jump);