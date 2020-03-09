import { Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
}
