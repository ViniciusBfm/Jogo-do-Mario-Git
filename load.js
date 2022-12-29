window.onload = ()=>{
    if(window.innerWidth < 870){
        alert(`É necessario um tamanho de tela maior que 870px para jogar! Sua tela tem ${window.innerWidth}px! Sem compatibilidade com dispositivos moveis.` )
        window.location = 'erro.html'
    }else{
        setTimeout(()=>{
            window.location = 'game.html'
        },3000)
    }
}