import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { Carrinho } from "src/app/models/Carrinho";
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  convertDecimal(valor: string): string{
    return parseFloat(valor).toFixed(2).replace('.', ',');
  }

  public produtos: Produtos[];
  public carrinho: Carrinho[];
  public valorTotal: number = 0;

  constructor() { 
    if(this.carrinho){
      this.carrinho.forEach( item =>{
          this.valorTotal +=(item.produtos.valorUnitario * item.qtde);
      })
    }
   }

  ngOnInit(): void {
  }

  alterarQtde(valor, item){
    if(item.qtde){
      item.qtde++;
      this.valorTotal+=item.produtos.valorUnitario;
    }else{
      item.qtde--;
      this.valorTotal -= item.produtos.valorUnitario;
    }
  }

  removerCarrinho(item){
    this.valorTotal-=item.produtos.valorUnitario;
    this.carrinho = this.carrinho.filter(prod=>prod != item
    )
  }
}
