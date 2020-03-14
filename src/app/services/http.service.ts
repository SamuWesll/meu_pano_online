import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Produtos } from '../models/Produtos';
import { Endereco } from '../models/Endereco';
import { Observable } from 'rxjs';

const URLLocalJson: string = "assets/json/produtos.json";
const urlCriarCadastro: string = "http://localhost:8080/meupanoonline/cliente";

function JsonProdutosURL(data: any[]) {
  return data.map(
    (el) => {
      return new Produtos(el.id_produto,el.titulo, el.fabricante, el.descricao, el.cod_categoria, el.cor, el.valor_bruto, el.valor_unitario, el.id_fornecedor, el.estoque_disponivel,el.url_img)
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
    let prods = this.http.get(URLLocalJson);
    return prods.pipe(
      map(JsonProdutosURL)
    )
  };

  postClientes(body: object){
    return this.http.post(urlCriarCadastro, body)
  }


}
