import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private enderecoService: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Ocorreu um erro no cliente ou na rede. Manuseie de acordo.
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      // O back-end retornou um código de resposta sem êxito.
      // O corpo da resposta pode conter pistas sobre o que deu errado,
      console.error(
        `Código retornado de back-end ${error.status}, ` +
        `corpo era: ${error.error}`);
    }
    // retorna um observável com uma mensagem de erro voltada para o usuário
    return throwError(
      'Algo ruím aconteceu; por favor, tente novamente mais tarde.');
  };

  postEndereco(body: object) {
    return this.enderecoService.post("http://localhost:8080/meupanoonline/endereco", body)
  };

  deletarEndereco(idEndereco: number): Observable<void> {

    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = {
      headers: httpHeaders
    }

    return this.enderecoService.delete<void>(`http://localhost:8080/meupanoonline/endereco?idEndereco=${idEndereco}`, options).pipe(catchError(this.handleError))
  }

}
