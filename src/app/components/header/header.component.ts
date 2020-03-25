import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { FormControl } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { ClienteService } from 'src/app/services/cliente.service';
import { Sexo } from 'src/app/models/Sexo';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  public login: Cliente;

  emaiOuCpflInput = new FormControl();
  senhaInput = new FormControl();

  constructor(private httpCliente: ClienteService) {}

  realizarLogin() {
    let validarCampor: any = this.emaiOuCpflInput.value.indexOf('@');
    if(validarCampor >= 0) {
      let body = {
        "email": this.emaiOuCpflInput.value,
	      "senha": this.senhaInput.value,
      };
      this.httpCliente.postLogin(body).subscribe(
        (data) => {
          if(data['statusCodeValue'] == 400) {
            alert(data['body']);
          } else if(data['statusCodeValue'] == 200) {
            this.logadoLocalStorage(data['body']);
            this.verificarLogin();
            console.log(this.login)
            return alert('Login realizado com sucesso')
          }
        }
      )
    } else {
      let body = {
        "cpf": this.emaiOuCpflInput.value,
	      "senha": this.senhaInput.value,
      };
      this.httpCliente.postLoginCpf(body).subscribe(
        (data) => {
          if(data['statusCodeValue'] == 400) {
            alert(data['body']);
          } else if(data['statusCodeValue'] == 200) {
            this.logadoLocalStorage(data['body']);
            this.verificarLogin();
            console.log(this.login)
            return alert('Login realizado com sucesso')
          }
        }
      )
    }
    

    this.emaiOuCpflInput.setValue('');
    this.senhaInput.setValue('');

  }

  // Função para carregar as informações do cliente
  logadoLocalStorage(body) {

    let gen: Sexo;

    if(body.genero == "M") {
      gen = Sexo.masculino;
    } else if(body.genero == "F") {
      gen = Sexo.feminino;
    }

    let cliente = {
      idCliente: body['idCliente'],
      nome: body['nome'],
      cpf: body['cpf'],
      email: body['email'],
      senha: null,
      dataNascimento: formatDate(body['dataNascimento'], 'dd/MM/yyyy', 'en-BR'),
      genero: gen,
    }

    localStorage.setItem("logado", JSON.stringify(cliente));

    this.login = new Cliente(
      cliente.idCliente,
      cliente.nome,
      cliente.cpf,
      cliente.email,
      cliente.senha,
      cliente.dataNascimento,
      cliente.genero
    );
  }

  verificarLogin() {

    this.login = JSON.parse(localStorage.getItem("logado"));

  }

  sairLogin() {

    localStorage.removeItem("logado");

    this.verificarLogin();

  }

  separarNome(nome: string) {
    let separado = nome.split(" ",1)
    return separado;
  }

  ngOnInit(): void {
    this.verificarLogin();
  }

}
