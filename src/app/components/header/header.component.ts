import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoginComponent } from '../login/login.component';
import { Cliente } from 'src/app/models/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef
  public login: Cliente;

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent)
  }
  constructor(private modalService: BsModalService, private router: Router) {

    this.verificarLogin();
  }

  // this.sairLogin();

  verificarLogin() {

    this.login = JSON.parse(localStorage.getItem("logado"));

  }

  sairLogin() {

    localStorage.removeItem("logado");

  }

  separarNome(nome: string) {
    let separado = nome.split(" ", 1)
    return separado;
  }

  ngOnInit(): void {

    this.verificarLogin();

  }

  pesquisarProduto(pesquisa: string) {
    if (pesquisa.length < 1) {
      return
    }

    this.router.navigate(['/busca', pesquisa])
    const input = document.querySelector('input')
    input.value = ''
  }

}
