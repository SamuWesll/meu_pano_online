import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Produtos } from '../models/Produtos';

const URLLocalJson: string = "assets/json/produtos.json";

function JsonProdutosURL(data: any[]) {
  return data.map(
    (el) => {
      return new Produtos(el.idProduto,el.titulo, el.descricao, el.cor, el.valor, el.valorDesconto, el.codCategoria)
    }
  )
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

  }

}
