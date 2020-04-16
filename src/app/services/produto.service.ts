import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../models/Produtos';
import { Observable } from 'rxjs';

const urlProduto: string = "http://localhost:8080/meupanoonline/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  getListaProdutos() {
    return this.http.get(`${urlProduto}/lista`);
  }

  getMaisVendidos() {
    return this.http.get(`${urlProduto}/mais-vendidos`);
  }

  getMenorPreco() {
    return this.http.get(`${urlProduto}/valor-asc`);
  }

  getMaiorPreco() {
    return this.http.get(`${urlProduto}/valor-desc`);
  }

  getProdutosAZ() {
    return this.http.get(`${urlProduto}/ordem-az`);
  }

  getProdutosZA() {
    return this.http.get(`${urlProduto}/ordem-za`);
  }

  getProduto(codProduto: number) {
    let buscarProduto = this.http.get(urlProduto + "?idCliente=" + codProduto)
    return buscarProduto;
  }

  getDetalhe(produto: Produtos): Observable<Produtos> {
    const url = urlProduto + "/produtos/detalhes/${produto.idProduto}";
    return this.http.get<Produtos>(url);
  }
}
