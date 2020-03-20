import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.css']
})
export class ProdutosCategoriaComponent implements OnInit {

  public produtos: Produtos[] = [];
  public produtosPorCategoria: Produtos[] = [];

  converteDecimal(valor: number): string {
    return valor.toFixed(2).replace('.', ',')
  };

  constructor(private http: HttpService) {
    // this.http.carregarProdutos2().subscribe(prods => {
    //   this.produtos = prods
    //   this.produtosPorCategoria = prods
    // })
  }

  listaDaCategoria(id: number) {
    this.produtos = []
    this.http.carregarProdutos2().forEach(prod => {
      if (id !== 0) {
        this.produtos = prod['body']
        this.produtosPorCategoria = this.produtos.filter(p => p.categoria === id)        
        // console.log(this.produtosPorCategoria)
      } else {
        this.produtosPorCategoria = prod['body']
        // console.log(this.produtosPorCategoria)
      }
    })
  }

  ngOnInit(): void {
  }

}
