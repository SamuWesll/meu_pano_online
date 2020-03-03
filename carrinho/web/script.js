let inputsenhaUsuario = document.getElementById('senhaUsuario')
let inputconfirmarSenhaUsuario = document.getElementById('confirmarSenhaUsuario');


inputconfirmarSenhaUsuario.addEventListener('keyup', (e)=>{
    if(confirmarSenhaUsuario.value != inputsenhaUsuario.value){
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-invalid')
    }else{
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-valid')
    }
})

