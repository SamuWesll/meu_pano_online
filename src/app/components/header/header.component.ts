import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { LoginComponent } from '../login/login.component';
import { Cliente } from 'src/app/models/Cliente';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/models/Categorias';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Produtos } from 'src/app/models/Produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: BsModalRef
  public login: Cliente;
  public categorias: Categorias[] = [];

  public produtos: Produtos[] = [];
  public produtosPorCategoria: Produtos[] = [];

  // @Output() categoriaClicada = new EventEmitter();


  private categoriaTotal: Categorias = new Categorias(0, 'Todas as Categorias');

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent)
  }
  constructor(private modalService: BsModalService, private router: Router, private categoria: CategoriaService,
    private produtoService: ProdutoService) {

    this.verificarLogin();

    this.categoria.carregarCategorias().subscribe(cat => {
      this.categorias.push(this.categoriaTotal)
      cat['body'].forEach(c => this.categorias.push(new Categorias(c.idCategoria, c.descricao)))
    })
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
    // console.log(id)
    // this.produtos = []
    // this.produtoService.getListaProdutos().forEach(prod => {
    //   if (id !== 0) {
    //     this.produtos = prod['body']
    //     this.produtosPorCategoria = this.produtos.filter(p => p.categoria === id)
    //     console.log(this.produtosPorCategoria)
    //   } else {
    //     this.produtosPorCategoria = prod['body']
    //     console.log(this.produtosPorCategoria)
    //   }
    // })

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
