import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-finalizada',
  templateUrl: './compra-finalizada.component.html',
  styleUrls: ['./compra-finalizada.component.css']
})
export class CompraFinalizadaComponent implements OnInit {

  pedido: [] = []
  qtdProdutos: number = 0

  qtdProdutosComprados(){
    let contadorProdutos = 0
    for(let i=0; i<this.pedido['itensPedido'].length; i++ ){
    contadorProdutos += this.pedido['itensPedido'][i].qtdProduto
    }

    this.qtdProdutos = contadorProdutos
  }
  
  mascaraValor(valor: number) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
  }

  valorFreteRadio: number;
  
 valorFrete(valor: number) {
    this.valorFreteRadio = valor;
  };

  getCompraFinalizada() {
    this.pedido = JSON.parse(localStorage.getItem('pedidoFinalizado')) 
    console.log(this.pedido)
    localStorage.removeItem('pedidoFinalizado')
    this.qtdProdutosComprados()
  }

  btnVoltarHome(){
    this.router.navigate(['home'])
    this.pedido = []
  }

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.getCompraFinalizada()
  }

}
