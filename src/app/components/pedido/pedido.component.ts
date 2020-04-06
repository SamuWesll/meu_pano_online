import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoService } from 'src/app/services/pedido.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { Response } from "../../response/Response";
import { Pedido } from "../../models/Pedido";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit, OnDestroy {

  clienteLogado: Response;

  constructor(private http: HttpClient, 
    private pedidoService: PedidoService, 
    private clienteService: ClienteService, 
    private route: ActivatedRoute) { }

    sub: Subscription;

  ngOnInit() {
    this.clienteLogado=this.clienteService.clienteLogadoValue;
  }

  // cancelar(pedido: Pedido){
  //   this.pedidoService.cancelar(pedido.idPedido).subscribe(
  //     res => {
  //       if(res){
  //         pedido.status = res.status;
  //       }
  //     }
  //   );
  // }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
