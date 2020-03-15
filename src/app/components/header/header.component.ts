import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoginComponent } from '../login/login.component';
import { Cliente } from 'src/app/models/Cliente';

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
  constructor(private modalService: BsModalService) {

    this.verificarLogin();

    // this.sairLogin();

  }

  verificarLogin() {

    this.login = JSON.parse(localStorage.getItem("logado"));
    console.log(this.login);

  }

  sairLogin() {

    localStorage.removeItem("logado");

  }

  ngOnInit(): void {
  }

}
