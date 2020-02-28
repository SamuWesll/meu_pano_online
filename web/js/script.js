// início validação modal login
const emailCpfUser = document.querySelector('#emailCpfUser')
const senhaUser = document.querySelector('#senhaUser')
const btnLogin = document.querySelector('#btnLogin')
let erro = null

function validaCampo(inputForm) {
    if (inputForm.value.length === 0) {
        alert(`O campo "${inputForm.previousElementSibling.innerText}" é obrigatório`)
        inputForm.classList.remove('border-success')
        inputForm.classList.add('border-danger')
        erro++
    } else {
        inputForm.classList.remove('border-danger')
        inputForm.classList.add('border-success')
    }
}

function validaLogin() {
    validaCampo(emailCpfUser)
    validaCampo(senhaUser)

    if (erro === null) {
        alert('Carregando...')
        return true
    } else {
        erro = null
        return false
    }
}

btnLogin.onclick = () => validaLogin()
// fim validação modal login
//inicio validação modal esqueci senha
const emailEsqueciSenha = document.querySelector('#emailEsqueciSenha')
const btnEnviarEmail = document.querySelector('#btnEnviarEmail')

function validaEmail() {
    validaCampo(emailEsqueciSenha)

    if (erro === null) {
        alert('Enviando um novo e-mail...')
        return true
    } else {
        erro = null
        return false
    }
}

btnEnviarEmail.onclick = () => validaEmail()
//fim validação modal esqueci senha

let inputCEP = document.getElementById('cepDetalhe');
let btnPesquisarCEP = document.getElementById('btnPesquisarCEP');

let config = {
    method: "GET"
}

/*function buscarCep(cep){
    alert('Buscando CEP');
    let config = {
        method:"get"
    }
    fetch(`http://viacep.com.br/ws/${cep}/json/`, config)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){ 
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }
        inputCEP.setAttribute('class', 'form-control is-valid')
        
        
    })
}*/

inputCEP.addEventListener('keyup',  (event)=>{
        if(isNaN(inputCEP.value)){
            inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length -1))
        }
        if(inputCEP.value.length > 8){
            inputCEP.value = inputCEP.value.substring(0, 8)
        }
})
