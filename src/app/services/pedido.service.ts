import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pedido } from "../models/Pedido";

const URLPedido: string = "http://localhost:8080/meupanoonline/pedido" ;

@Injectable({
    providedIn: 'root'
})



export class PedidoService{

    constructor(private pedidoService: HttpClient){ }

    criarPedido(body: object) {
        return this.pedidoService.post(URLPedido, body);
    }

    exibir(idPedido): Observable<Pedido>{
        return this.pedidoService.get<Pedido>(`$URLPedido/${idPedido}`).pipe(
            catchError(_ => of(null))
        );
    }

    cancelar(idPedido): Observable<Pedido>{
        return this.pedidoService.patch<Pedido>(`{URLPedido}/deletar${idPedido}`, null).pipe(
            catchError(_ => of(null))
        )
    }
}