const nomedoJogador = document.querySelector('.namePlayer')
const player = localStorage.getItem('player')
    nomedoJogador.innerHTML = player

window.onload = ()=>{
    setTimeout(()=>{
        window.location = 'index.html'
    },7000)
}