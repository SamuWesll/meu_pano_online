import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/Pedido';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pedido-detalhado',
    templateUrl: './pedido-detalhado.component.html',
    styleUrls: ['./pedido-detalhado.component.css']
})

export class PedidoDetalhadoComponent implements OnInit {

    constructor(private pedidoService: PedidoService,
         private route: ActivatedRoute) { }

    converteDecimal(valor: number): string {
        return valor.toFixed(2).replace('.', ',');
    }

    pedido: any[] = [];
    ngOnInit() {
        this.pedidoService.exibir(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
            console.log(this.pedido)
            console.log(data)
            return this.pedido=data
            
        });
        console.log(this.pedido);
    }

}