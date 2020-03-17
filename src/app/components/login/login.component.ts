import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { Sexo } from 'src/app/models/Sexo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logado: Cliente;

  constructor() {

    this.verificarLogin();

  }

  logadoLocalStorage() {

    let cliente = {
      idCliente: 1,
      nome: "Samuel Weslley Rocha Barboza",
      cpf: "41851766865",
      email: "samuelwrochabarboza@gmail.com",
      senha: "samuka",
      dataNascimento: "08/12/1994",
      genero: Sexo.masculino,
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

      // this.trocadorUrl();

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
  }

}
