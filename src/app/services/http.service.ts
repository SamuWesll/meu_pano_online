import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produtos } from '../models/Produtos';

const URLLocalJson: string = "../assets/json/produtos.json";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  info: Produtos = {};
  carregado = false;

  constructor(private http: HttpClient) {
    this.http.get(URLLocalJson).subscribe((resp: Produtos) => {
      this.carregado = true;
      this.info = resp
    });
  }

}
