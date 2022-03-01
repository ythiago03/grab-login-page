function clicar(){
    let log1 = document.getElementById('email')
    let log2 = document.getElementById('senha')
    let erro = document.getElementById('erro')
    let erro1 = document.getElementById('erro1')

    let emailIco = document.getElementById('email-icon')
    if(log1.value == ''){
    erro.style.opacity = '1'
    log1.style.borderColor = '#FF5757'
    emailIco.style.color = '#FF5757'    
    log1.value = 'email@exemplo'
    }

    if(log2.value == ''){
        erro1.style.opacity = '1'
        log2.style.borderColor = '#FF5757'
        }
}
