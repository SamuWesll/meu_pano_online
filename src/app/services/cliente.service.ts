import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteForm } from '../models/ClienteForm';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private httpCliente: HttpClient) { }


  postClientes(body: {}) {
    return this.httpCliente.post("http://localhost:8080/meupanoonline/cliente", body);
  };

  postLogin(body: {}) {
    return this.httpCliente.post("http://localhost:8080/meupanoonline/cliente/login", body)
  };

  postLoginCpf(body: {}) {
    return this.httpCliente.post("http://localhost:8080/meupanoonline/cliente/loginCpf", body)
  }

}
