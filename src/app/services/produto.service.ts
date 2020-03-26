import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

const URLProduto: string = "http://localhost:8080/meupanoonline/produtos";
export class ProdutoService {

  constructor(private produtoService: HttpClient) { }
  
}
