let inputsenhaUsuario = document.getElementById('senhaUsuario')
let inputconfirmarSenhaUsuario = document.getElementById('confirmarSenhaUsuario');


inputconfirmarSenhaUsuario.addEventListener('keyup', (e)=>{
    if(confirmarSenhaUsuario.value != inputsenhaUsuario.value){
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-invalid')
    }else{
        confirmarSenhaUsuario.setAttribute('class', 'form-control is-valid')
    }
})

function verifica() {
    if (document.forms[0].email.value.length == 0) {
      alert('Por favor, informe o seu EMAIL.');
      document.frmEnvia.email.focus();
      return false;
    }
    return true;
  }
   
function checarEmail(){
if( document.forms[0].email.value=="" 
    || document.forms[0].email.value.indexOf('@')==-1 
    || document.forms[0].email.value.indexOf('.')==-1 )
    {
        alert( "Por favor, informe um E-MAIL válido!" );
        return false;
    }
}