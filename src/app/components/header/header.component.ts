import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoginComponent } from '../login/login.component';
import { Cliente } from 'src/app/models/Cliente';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/models/Categorias';
import { CategoriaService } from 'src/app/services/categoria.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef
  public login: Cliente;
  public categorias: Categorias[] = [];

  private categoriaTotal: Categorias = new Categorias(0, 'Todas as Categorias');

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent)
  }
  constructor(private modalService: BsModalService, private router: Router, private categoria: CategoriaService) {

    this.verificarLogin();

    this.categoria.carregarCategorias().pipe(map((data: any[]) => {
        this.categorias.push(this.categoriaTotal)
      return data.map(cat => {
        return this.categorias.push(new Categorias(cat.idCategoria, cat.descricao))
      })
    })).subscribe()
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

  btnFiltro(id: number) {
    this.router.navigate(['/produtos/categoria', id])
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
