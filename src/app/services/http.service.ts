import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
import { Contato } from '../models/Contato';

// function AdaptadorDeContato(data: any[]) {
//   return data.map(
//     elem => new Contato(
//       // elem.codigo,
//       elem.nome,
//       elem.email,
//       elem.telefone,
//       elem.mensagem
//     )
//   )
// }
=======
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Produtos } from '../models/Produtos';

const URLLocalJson: string = "assets/json/produtos.json";

function JsonProdutosURL(data: any[]) {
  return data.map(
    (el) => {
      return new Produtos(el.id_produto,el.titulo, el.fabricante, el.descricao, el.cod_categoria, el.cor, el.valor_bruto, el.valor_unitario, el.id_fornecedor, el.estoque_disponivel)
    }
  )
}
>>>>>>> samuel

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
=======

  getProdutos() {

    let prods = this.http.get(URLLocalJson);

    return prods.pipe(
      map(JsonProdutosURL)
    )

  }

>>>>>>> samuel
}
