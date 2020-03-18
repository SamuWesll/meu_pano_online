import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { Sexo } from 'src/app/models/Sexo';
import { Form, FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logado: Cliente;
  formLogin: FormGroup;

  constructor(private httpCliente: ClienteService) {  }

  btnLogin(login) {
    let body = {
      "email": login.value.email,
	    "senha": login.value.senha
    };
    this.httpCliente.postLogin(body).subscribe(
      (data) => {
        if(data['statusCodeValue'] == 400) {
          alert(data['body']);
        } else if(data['statusCodeValue'] == 200) {
          this.logadoLocalStorage(data['body']);
        }
        // console.log(data);
      }
    )
  }

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
      senha: body['senha'],
      dataNascimento: body['dataNascimento'],
      genero: gen,
    }

    localStorage.setItem("logado", JSON.stringify(cliente));

    this.logado = new Cliente(
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

    this.logado = JSON.parse(localStorage.getItem("logado"));
    console.log(this.logado);

  }

  sairLogin() {

    localStorage.removeItem("logado");

    this.logado = null;

    // this.trocadorUrl();

  }

  ngOnInit(): void {

    this.verificarLogin();

  }

}
