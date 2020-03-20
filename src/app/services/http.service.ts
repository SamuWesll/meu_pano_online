import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produtos } from '../models/Produtos';
// import { map } from "rxjs/operators";
import { Endereco } from '../models/Endereco';
import { Observable } from 'rxjs';


const URLLocalJson: string = "http://localhost:8080/meupanoonline/produto/lista";
const URLCategoria: string = "http://localhost:8080/meupanoonline/categoria/lista";

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

  public carregarCategorias() {
    return this.http.get(URLCategoria)
  }

  public carregarProdutos2() {
    return this.http.get(URLLocalJson)
    
    // return prods.pipe(map((data: any[]) => {
    //   return data.map(el => {
    //     return new Produtos(el.idProduto, el.tituloProduto, el.descricao, el.imagem, el.valor, el.valorDesconto, el.categoria)
    //   })
    // }))
  }

  public carregarProdutos() {
    return new Promise((resolve, reject) => {
      this.http.get(URLLocalJson).subscribe((resp: Produtos) => {
        this.carregado = true;
        this.info = resp['body']
        resolve();
      });
    });
  }

  public getProdutoById(id: string) {
    return this.http.get(`http://localhost:8080/meupanoonline/produto?idProduto=${id}`)
  }

  public pesquisarProduto(pesquisa: string) {
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
