import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URLPedido: string = "http://localhost:8080/meupanoonline/pedido" ;

@Injectable({
    providedIn: 'root'
})



export class PedidoService{

    constructor(private pedidoService: HttpClient){ }

    criarPedido(body: object) {
        return this.pedidoService.post(URLPedido, body);
    }

}