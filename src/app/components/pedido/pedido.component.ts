import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoService } from 'src/app/services/pedido.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { Response } from "../../response/Response";
import { Pedido } from "../../models/Pedido";
import { map } from "rxjs/operators";
import { ProdutoCarrinho } from "src/app/models/ProdutoCarrinho";
import { Router } from "@angular/router";
import { CarrinhoService } from "src/app/services/carrinho.service";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  clienteLogado: Response;
  idCliente = JSON.parse(localStorage.getItem("logado"));
  sub: Subscription;
  pedidosCliente: Pedido[] = [];
  refazer: any;

  converteDecimal(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  constructor(private http: HttpClient,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.clienteLogado = this.clienteService.clienteLogadoValue;
    this.getPedidos(this.idCliente.idCliente);
    console.log(this.idCliente.idCliente);
  }

  getPedidos(id) {
    this.pedidoService.getPedidos(id).pipe(map((data: Pedido[]) => data)).forEach(pCliente => {
      this.pedidosCliente = pCliente;
    });
  }

  refazerPedido(pedido: any) {
    console.log(pedido)
    let itensPedido: any[] = pedido.itensPedido;
    let contador: number;
    itensPedido.forEach(data => {
      this.carrinhoService.adicionarItem(new ProdutoCarrinho(data.produto, data.contador))
      .subscribe(
        res => {
          if (!res) {
            console.log('Erro' + res);
            throw new Error();
          }
        },
        _ => console.log('Erro')
      )
    })
  }
   
  cancelar(pedido: Pedido) {
    this.pedidoService.cancelar(pedido.idPedido).subscribe(
      res => {
        if (res) {
          pedido.status = res.status;
        }
      }
    );
  }
}
