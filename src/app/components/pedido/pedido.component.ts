import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoService } from 'src/app/services/pedido.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { Response } from "../../response/Response";
import { Pedido } from "../../models/Pedido";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  clienteLogado: Response;
  idCliente= JSON.parse(localStorage.getItem("logado"));
  //pedidos: Pedido
  pedidosCliente: Pedido[]=[];
  
  converteDecimal(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  constructor(private http: HttpClient, 
    private pedidoService: PedidoService, 
    private clienteService: ClienteService, 
    private route: ActivatedRoute) { }

    sub: Subscription;

  ngOnInit() {
    this.clienteLogado=this.clienteService.clienteLogadoValue;
    this.getPedidos(this.idCliente.idCliente);
    console.log(this.idCliente.idCliente);
      //console.log(data)
    
    //this.getPedidos(this.sub);
    
  }

  getPedidos(id){
    this.pedidoService.getPedidos(id).pipe(map((data : Pedido[])=>data)).forEach(pCliente=> {
      this.pedidosCliente = pCliente;
    });
    // this.pedidoService.getPedidos().subscribe(map((data : Pedido[])=>data)).forEach(pCliente=> {
    //   this.pedidosCliente = pCliente;
    // });
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


  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  // }
}
