import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
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
  public opcoes = [
    { "chave": "padrao", "valor": "Padrão" },
    { "chave": "mais-vendidos", "valor": "Mais Vendidos" },
    { "chave": "menor", "valor": "Menor Preço" },
    { "chave": "maior", "valor": "Maior Preço" },
    { "chave": "az", "valor": "A - Z" },
    { "chave": "za", "valor": "Z - A" }
  ]

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
      this.filtroProdutos(this.idCategoria, valor)
    } else if (valor === 'mais-vendidos') {
      this.produtosOrdenados = valor
      this.filtroProdutos(this.idCategoria, valor)
    } else if (valor === 'menor') {
      this.produtosOrdenados = valor
      this.filtroProdutos(this.idCategoria, valor)
    } else if (valor === 'maior') {
      this.produtosOrdenados = valor
      this.filtroProdutos(this.idCategoria, valor)
    } else if (valor === 'az') {
      this.produtosOrdenados = valor
      this.filtroProdutos(this.idCategoria, valor)
    } else if (valor === 'za') {
      this.produtosOrdenados = valor
      this.filtroProdutos(this.idCategoria, valor)
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

  filtroProdutos(id: number, ordem: string) {
    if (ordem === 'padrao') {
      this.httpProduto.getListaProdutos().pipe(map((data: Produtos[]) => data))
        .forEach(prod => this.adaptadorFiltro(id, prod))
    } else if (ordem === 'mais-vendidos') {
      this.httpProduto.getMaisVendidos().pipe(map((data: Produtos[]) => data))
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
