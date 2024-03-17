let bt_click = document.querySelector('.botao')
let popup = document.querySelector('.popup')
let bt_fechar = document.querySelector('.fechar')


function aparece() {
    popup.style.display ='flex'
}
function desaparece() {
    popup.style.display ='none'
}

bt_click.addEventListener('click', aparece)
bt_fechar.addEventListener('click', desaparece)