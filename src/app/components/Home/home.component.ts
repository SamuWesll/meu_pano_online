import { Component, OnInit, ViewChild } from '@angular/core';
import { Categorias } from 'src/app/models/Categorias';
import { HttpService } from 'src/app/services/http.service';
import { ProdutosCategoriaComponent } from '../produtos-categoria/produtos-categoria.component';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('lista') lista: ProdutosCategoriaComponent

  produtos: Produtos[] = []
  produtosPorCategoria: Produtos[] = []

  constructor(public http: HttpService) {
    this.http.carregarCategorias()

  }

  listarCategoria(categoria: Categorias) {
    // console.log(categoria.cod)
    // this.produtos = []

    // this.http.carregarProdutos2().forEach(prod => {
    //   if (categoria.cod !== 0) {
    //     this.produtos = prod['body']
    //     this.produtosPorCategoria = this.produtos.filter(p => p.categoria === categoria.cod)        
    //     console.log(this.produtosPorCategoria)
    //   } else {
    //     this.produtosPorCategoria = prod['body']
    //     console.log(this.produtosPorCategoria)
    //   }
    // })

    this.lista.listaDaCategoria(categoria.cod)
  }

  ngOnInit(): void {
  }

}
