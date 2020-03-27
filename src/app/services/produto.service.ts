import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URLProduto: string = "http://localhost:8080/meupanoonline/produtos";

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private produtoService: HttpClient) { }
  
}
