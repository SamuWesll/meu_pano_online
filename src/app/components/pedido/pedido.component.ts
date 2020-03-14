import { Component, OnInit } from '@angular/core';
// import { Pedido} from '../produto';
import { FormGroup, FormControl, Validators } from  '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 'produto': new FormControl(this.form.nome, [Validators.required]),
    // function total(){
    //     let valor1 = window.document.getElementById('produto')
    //     let valor2 = window.document.getElementById('total')
    //     var prod = Number(valor1.value)
    //     var prod = Number(valor2.value)
    //     let somaprodutos = valor1 * valor2
    //     valor2.innerHTML = (somaprodutos)

    // });
  
}
}
