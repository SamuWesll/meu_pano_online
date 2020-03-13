import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const emailCpfUser = document.querySelector('#emailCpfUser')
    const senhaUser = document.querySelector('#senhaUser')
    const btnLogin = document.querySelector("#btnLogin")
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

    btnLogin.addEventListener('click', () => validaLogin())

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

    btnEnviarEmail.addEventListener('click', () => validaEmail())
  }


}
