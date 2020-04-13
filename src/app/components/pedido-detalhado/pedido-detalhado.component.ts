import { Component, OnInit } from "@angular/core";
import { PedidoService } from 'src/app/services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/models/Pedido';

export class PedidoDetalhadoComponent implements OnInit {

    constructor(private pedidoService: PedidoService, private route: ActivatedRoute) { }

    converteDecimal(valor: number): string {
        return valor.toFixed(2).replace('.', ',');
    }

    pedido$: Observable<Pedido>;

    ngOnInit() {
        this.pedido$ = this.pedidoService.exibir(this.route.snapshot.paramMap.get('id'));
    }

}