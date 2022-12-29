const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const perdeu = document.querySelector('.perdeu')
const replay = document.querySelector('.start')
const retornarMenu = document.querySelector('.return')
const timer = document.querySelector('.timer')
const nomedoJogador = document.querySelector('.namePlayer')

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500)
}

const loop = setInterval (()=>{

    const pipePosition = pipe.offsetLeft
    const marioPositon = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft
    
    if (pipePosition <= 85 && pipePosition > 0  && marioPositon < 150  ){
        /*parar o tubo onde bateu no mario*/
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`
        /*parar o mario onde ele colidiu*/
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPositon}px` 
        /*mudar a imagem do mario*/
        mario.src = 'game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '20px' 
        /*Parar nuvens*/
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px` 
        /*Mensagem que pérdeu*/
        perdeu.classList.add('gamerOver')
        /*mensagem de start*/
        replay.classList.add('start-return')
        /*mensagem de return*/
        retornarMenu.classList.add('returnMenu')
        /*parar o tempo*/
        clearInterval(this.tempo)
        clearInterval(loop)

    }
},10)

document.addEventListener('keydown', jump)

/*recarregar a pagina novamente*/
replay.addEventListener('click', ()=>{
    location.reload()
})

/*Tempo*/
const startTimer = ()=>{
    this.tempo = setInterval(()=>{
        var currentTimer = Number(timer.innerHTML)
        timer.innerHTML = currentTimer + 1  
        localStorage.temp = currentTimer + 1 
    }, 1000)

}
/*retornar ao menu inicial*/
function returnMenu(){
    window.location = 'index.html'
}

/*carregando a pagina*/
window.onload = () =>{
    startTimer()
    /*pegar o nome do jogar*/
    const player = localStorage.getItem('player')
    nomedoJogador.innerHTML = player
}
