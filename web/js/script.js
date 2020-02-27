// início validação modal login
const emailCpfUser = document.querySelector('#emailCpfUser')
const senhaUser = document.querySelector('#senhaUser')
const btnLogin = document.querySelector('#btnLogin')
let erro = null

function validaCampo(inputForm) {
    if (inputForm.value.length === 0) {
        alert(`O campo "${inputForm['placeholder']}" é obrigatório`)
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