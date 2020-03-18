import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produtos } from '../models/Produtos';
import { Endereco } from '../models/Endereco';
import { Observable } from 'rxjs';


const URLLocalJson: string = "http://localhost:8080/meupanoonline/produto/lista";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  info: Produtos[] = [];
  carregado = false;
  produtoPesquisado: Produtos[] = [];

  constructor(private http: HttpClient) {
    this.carregarProdutos();
  }

  private carregarProdutos() {
    return new Promise((resolve, reject) => {
      this.http.get(URLLocalJson).subscribe((resp: Produtos) => {
        this.carregado = true;
        this.info = resp['body']
        resolve();
      });
    });
  }

  getProdutoById(id: string) {
    return this.http.get(`http://localhost:8080/meupanoonline/produto?idProduto=${id}`)
  }

  pesquisarProduto(pesquisa: string) {
    if (this.info.length === 0) {
      this.carregarProdutos().then(() => this.filtrarProdutos(pesquisa))
    } else {
      this.filtrarProdutos(pesquisa)
    }
  }

  private filtrarProdutos(pesquisa: string) {
    this.produtoPesquisado = [];
    pesquisa = pesquisa.toLocaleLowerCase();

    this.info.forEach(prod => {
      const prodLower = prod.tituloProduto.toLocaleLowerCase()
      if (prodLower.indexOf(pesquisa) >= 0) {
        this.produtoPesquisado.push(prod);
      }
    })
  }
}
