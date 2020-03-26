import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  lastRoute: number = parseInt(this.route.params['_value'].categoria)
  public produtos: Produtos[] = [];
  public produtosPorCategoria: Produtos[] = [];

  converteDecimal(valor: string): string {
    return parseFloat(valor).toFixed(2).replace('.', ',')
  };

  tresParcelas(valor: number): string {
    valor /= 3
    return valor.toFixed(2).replace('.', ',')
  }

  // constructor(private httpProduto: ProdutoService, public http: HttpService) { }
  constructor(private httpProduto: ProdutoService, private route: ActivatedRoute) {

  }

  // usando o filtro de categorias
  filtroProdutos(id: number) {
    this.produtos = []
    this.produtosPorCategoria = []
    this.httpProduto.getListaProdutos().forEach(prod => {
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
    if (this.lastRoute >= 1) {
      this.filtroProdutos(this.lastRoute)
    } else {
      this.lastRoute = 0
      this.filtroProdutos(this.lastRoute)
    }
    console.log(this.lastRoute);
  }

}
