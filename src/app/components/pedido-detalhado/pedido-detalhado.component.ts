import { Component, OnInit } from "@angular/core";
import { PedidoService } from 'src/app/services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pedido-detalhado',
    templateUrl: './pedido-detalhado.component.html',
    styleUrls: ['./pedido-detalhado.component.css']
})

export class PedidoDetalhadoComponent implements OnInit {

    pedido: any[] = [];

    constructor(private pedidoService: PedidoService,
        private route: ActivatedRoute,
        private router: Router) { }

    converteDecimal(valor: number): string {
        return valor.toFixed(2).replace('.', ',');
    }

    ngOnInit() {
        this.pedidoService.exibir(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            this.pedido = data
            return this.pedido;
        });
    }
}