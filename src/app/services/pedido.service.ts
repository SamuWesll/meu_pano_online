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

    getPedidos(id){
        return this.pedidoService.get(URLPedido+"/lista-cliente/"+id).pipe();
    }

    // exibir(id: number) {
    //     let buscarPedido = this.pedidoService.get(URLPedido + "?idPedido=" + id)
    //     return buscarPedido;
    //   }


    exibir(id){
        console.log(id);
        return this.pedidoService.get(URLPedido+"?idPedido="+id)
            .pipe(
            catchError(_=> of(null))
        );
        
    }

    cancelar(idPedido): Observable<Pedido>{
        return this.pedidoService.patch<Pedido>(`{URLPedido}/deletar${idPedido}`, null).pipe();
    }
}