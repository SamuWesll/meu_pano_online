import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/Pedido';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from "src/app/models/Carrinho";
import { ProdutoCarrinho } from "src/app/models/ProdutoCarrinho";
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
        this.pedidoService.exibir(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
            console.log(this.pedido);
            console.log(data)
            this.pedido=data
            return this.pedido;
        });
        console.log(this.pedido);
    }
}