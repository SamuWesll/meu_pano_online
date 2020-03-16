import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Produtos } from '../models/Produtos';
import { Endereco } from '../models/Endereco';
import { Observable } from 'rxjs';

const URLLocalJson: string = "assets/json/produtos.json";
const urlCriarCadastro: string = "http://localhost:8080/meupanoonline/cliente";
const urlListaProdutos: string = "http://localhost:8080/meupanoonline/produto/lista";

function JsonProdutosURL(data: any[]) {
  return data.map(
    (el) => {
      return console.log(el)
      // return new Produtos(
      //   el.idProduto,
      //   el.tituloProduto,
      //   el.descricao,
      //   el.imagem,
      //   el.valor,
      //   el.valorDesconto,
      //   el.categoria,
      }
  )
};

function converterJson(data: any) {
  return JSON.parse(data);
} 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProdutos() {
    let prods = this.http.get(URLLocalJson)
    return prods.pipe(
      map(JsonProdutosURL)
    )
    //   this.http.get(urlListaProdutos).subscribe((resp: Produtos) => {
    //   this.carregado = true;
    //   this.info = resp['body']
    // });
  };

  postClientes(body: object){
    return this.http.post(urlCriarCadastro, body)
  }


}
