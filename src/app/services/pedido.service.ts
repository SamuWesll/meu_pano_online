import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

const URLPedido: string = "http://localhost:8080/meupanoonline/pedido" 

export class PedidoService{

    constructor(private pedidoService: HttpClient){ }


}