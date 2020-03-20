import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Cliente } from 'src/app/models/Cliente';
import { FormControl } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  // modalRef: BsModalRef
  // public login: Cliente;
  public login: number = 1; 

  emailInput = new FormControl();
  senhaInput = new FormControl();

  constructor() {}

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

  }

}
