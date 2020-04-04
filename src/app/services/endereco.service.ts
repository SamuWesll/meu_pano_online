import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private enderecoService: HttpClient) { }

  postEndereco(body: object) {
    return this.enderecoService.post("http://localhost:8080/meupanoonline/endereco", body)
  };

  deletarEndereco(idEndereco: number) {
    return this.enderecoService.delete(`http://localhost:8080/meupanoonline/endereco?idEndereco=${idEndereco}`)
  }

}
