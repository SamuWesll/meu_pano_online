import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public idCategoria;
  public produtosOrdenados = 'padrao';
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

  listarProdutos(valor) {
    if (valor === 'padrao') {
      this.produtosOrdenados = valor
    } else if (valor === 'menor') {
      this.produtosOrdenados = valor
    } else if (valor === 'maior') {
      this.produtosOrdenados = valor
    } else if (valor === 'az') {
      this.produtosOrdenados = valor
    } else if (valor === 'za') {
      this.produtosOrdenados = valor
    }
  }

  adaptadorFiltro(id, prod) {
    if (id !== 0) {
      this.produtos = prod
      this.produtosPorCategoria = this.produtos.filter(p => p.categoria == id)
    } else {
      this.produtosPorCategoria = prod
    }

  }

  // usando o filtro de categorias (refatorado)
  filtroProdutos(id: number, ordem: string) {
    if (ordem === 'padrao') {
      this.httpProduto.getListaProdutos().pipe(map((data: Produtos[]) => data))
        .forEach(prod => this.adaptadorFiltro(id, prod))
    } else if (ordem === 'menor') {
      this.httpProduto.getMenorPreco().pipe(map((data: Produtos[]) => data))
        .forEach(prod => this.adaptadorFiltro(id, prod))
    } else if (ordem === 'maior') {
      this.httpProduto.getMaiorPreco().pipe(map((data: Produtos[]) => data))
        .forEach(prod => this.adaptadorFiltro(id, prod))
    } else if (ordem === 'az') {
      this.httpProduto.getProdutosAZ().pipe(map((data: Produtos[]) => data))
        .forEach(prod => this.adaptadorFiltro(id, prod))
    } else if (ordem === 'za') {
      this.httpProduto.getProdutosZA().pipe(map((data: Produtos[]) => data))
        .forEach(prod => this.adaptadorFiltro(id, prod))
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'))
      this.idCategoria = id
      this.filtroProdutos(this.idCategoria, this.produtosOrdenados)
    })
  }
}
