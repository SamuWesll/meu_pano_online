import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Response } from '../response/Response';
import {CookieService} from 'ngx-cookie-service';
import {Cliente} from "../models/Cliente";

const URLLogin: string = "http://localhost:8080/meupanoonline/login";
const URLCadastro: string = "http://localhost:8080/meupanoonline/cadastro";
const URLPerfil: string = "http://localhost:8080/meupanoonline/perfil";

@Injectable({
    providedIn: 'root'
})

export class ClienteService {

    private clienteLogadoSubject: BehaviorSubject<Response>;
    public clienteLogado: Observable<Response>;
    public nomeTerms = new Subject<string>();
    public nome$ = this.nomeTerms.asObservable();
    constructor(private clienteService: HttpClient,
                private cookieService: CookieService) {
        const memo = localStorage.getItem('clienteLogado');
        this.clienteLogadoSubject = new BehaviorSubject<Response>(JSON.parse(memo));
        this.clienteLogado = this.clienteLogadoSubject.asObservable();
        cookieService.set('clienteLogado', memo);
    }

    get clienteLogadoValue() {
        return this.clienteLogadoSubject.value;
    }


    login(loginForm): Observable<Response> {
        
        return this.clienteService.post<Response>(URLLogin, loginForm).pipe(
            tap(cliente => {
                if (cliente && cliente.token) {
                    this.cookieService.set('clienteLogado', JSON.stringify(cliente));
                    if (loginForm.remembered) {
                        localStorage.setItem('clienteLogado', JSON.stringify(cliente));
                    }
                    console.log((cliente.nome));
                    this.nomeTerms.next(cliente.nome);
                    this.clienteLogadoSubject.next(cliente);
                    return cliente;
                }
            }),
            catchError(this.handleError('Não foi possível efetuar o login', null))
        );
    }

    logout() {
        this.clienteLogadoSubject.next(null);
        localStorage.removeItem('clienteLogado');
        this.cookieService.delete('clienteLogado');
    }

    cadastro(cliente: Cliente): Observable<Cliente> {
        
        return this.clienteService.post<Cliente>(URLCadastro, cliente);
    }

    atualizarDados(cliente: Cliente): Observable<Cliente> {
        
        return this.clienteService.put<Cliente>(URLPerfil, cliente);    }

    // get(email: string): Observable<Cliente> {
    //     const url = `${apiUrl}/profile/${email}`;
    //     return this.http.get<User>(url);
    // }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.log(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}