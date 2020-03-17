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

  info: Produtos;
  carregado = false;

  constructor(private http: HttpClient) {
    this.http.get(URLLocalJson).subscribe((resp: Produtos) => {
      console.log(resp['body'])
      this.carregado = true;
      this.info = resp['body']
    });
  }

  getProdutoById(id: string) {
    return this.http.get(`http://localhost:8080/meupanoonline/produto?idProduto=${id}`)
  }

}
