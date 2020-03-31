import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URLCategoria: string = "http://localhost:8080/meupanoonline/categoria/lista";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  public carregarCategorias() {
    return this.http.get(URLCategoria)
  }
}