import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public idCategoria;
  public produtos: Produtos[] = [];
  public produtosPorCategoria: Produtos[] = [];

  converteDecimal(valor: string): string {
    return parseFloat(valor).toFixed(2).replace('.', ',')
  };

  tresParcelas(valor: number): string {
    valor /= 3
    return valor.toFixed(2).replace('.', ',')
  }

  constructor(private httpProduto: ProdutoService, private route: ActivatedRoute) {

  }

  // usando o filtro de categorias
  filtroProdutos(id: number) {
    this.produtos = []
    this.produtosPorCategoria = []
    this.httpProduto.getListaProdutos().forEach(prod => {
      if (id !== 0) {
        this.produtos = prod['body']
        this.produtosPorCategoria = this.produtos.filter(p => p.categoria == id)
      } else {
        this.produtosPorCategoria = prod['body']
      }
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')) 
      this.idCategoria = id
      this.filtroProdutos(this.idCategoria)
    })
  }
}