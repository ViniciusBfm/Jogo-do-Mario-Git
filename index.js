
/*menu inicial*/
const jogador = document.getElementById('name')
const iniciarJogo = document.getElementById('start')
const form = document.querySelector('.info')
const timer = document.querySelector('.timer')

/*validar o input*/
const validateInput = ({target})=>{
    if(target.value.length > 2){
        iniciarJogo.removeAttribute('disabled')
        iniciarJogo.style.backgroundColor = 'green'
        iniciarJogo.style.color = 'white'
        iniciarJogo.value = 'Start'
    }else{
        iniciarJogo.setAttribute('disabled','')
        iniciarJogo.style.backgroundColor = 'red'
        iniciarJogo.style.color = 'white'
        iniciarJogo.value = 'Insira um nome'
    }
}
/*onde ir depois de colocar o nome*/
const handleSubmit = (event)=>{
    event.preventDefault()
    localStorage.setItem('player', jogador.value)
    window.location = 'load.html'
    
}

jogador.addEventListener('input', validateInput )
form.addEventListener('submit', handleSubmit)

window.onload = ()=>{
    if(timer = undefined){
        timer.innerHTML = '0'
    }else{
       timer.innerHTML = localStorage.temp 
    }
    
}



