import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { Sexo } from 'src/app/models/Sexo';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logado: Cliente;

  constructor(public _router: Router, public _location: Location) {

    this.verificarLogin();

  }

  refresh(): void{
    this._router.navigateByUrl('', {skipLocationChange:true}).then(() => {
      console.log(decodeURI(this._location.path()))
      this._router.navigate([ decodeURI(this._location.path())])
    });
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

      this.refresh();

  }

  verificarLogin() {

    this.logado = JSON.parse(localStorage.getItem("logado"));
    console.log(this.logado);

  }

  sairLogin() {

    localStorage.removeItem("logado");

    this.logado = null;

    this.refresh();

  }

  ngOnInit(): void {
  }

}
