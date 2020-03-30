
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

const urlProduto: string = "http://localhost:8080/meupanoonline/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {  }

  getListaProdutos() {
    let buscarProdutos = this.http.get(urlProduto + "/lista");
    return buscarProdutos
  };

  getProduto(codProduto: number) {
    let buscarProduto = this.http.get(urlProduto + "?idCliente=" + codProduto)
    return buscarProduto;
  }

}