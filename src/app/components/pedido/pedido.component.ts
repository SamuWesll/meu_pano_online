import { Component, OnInit } from '@angular/core';
// import { Pedido} from '../produto';
import { FormGroup, FormControl, Validators } from  '@angular/forms';
import { $ } from 'protractor';
import { Pedido } from "../../models/Pedido";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido: Pedido[] = [];


//    constructor(private Pedido: pedido ) {
//      this.Pedido.getPedido().subscribe(
//      (data) => {
//       this.pedido = data;
//     }
//   )
// }

  ngOnInit(): void {

   
}
}
