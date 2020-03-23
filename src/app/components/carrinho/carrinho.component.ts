import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { Carrinho } from "src/app/models/Carrinho";
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { HttpService } from 'src/app/services/http.service';
import { ItemCarrinho } from 'src/app/models/ItemCarrinho';
import { Subscription } from 'rxjs';

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
  //public carrinho: Carrinho[];
  public item: ItemCarrinho;
  public valorTotal: number;
  public sub: Subscription;



  constructor(public carrinhoService: CarrinhoService) { 
    this.valorTotal=0;
   }

  ngOnInit(): void {
    this.item = new ItemCarrinho();
  }

  private calcularTotal(p: Carrinho[]): number{
    let soma=0;
    p.forEach(valor =>{
      soma+=(valor.produto.valorDesconto*valor.quantidade);
    })
    return soma; 
  }

  carregarTotal(){
    this.sub=this.carrinhoService.ItemAtualizado.subscribe(()=>{
      this.valorTotal=this.calcularTotal(this.item.itemCarrinho);
    })
  }

  carregarCOmpra(){
    this.sub = this.carrinhoService.CarrinhoAtualizado.subscribe(()=>{
      let carrinho = this.carrinhoService
    })
  }


  // alterarQtde(valor, item){
  //   if(item.qtde){
  //     item.qtde++;
  //     this.valorTotal+=item.produtos.valorUnitario;
  //   }else{
  //     item.qtde--;
  //     this.valorTotal -= item.produtos.valorUnitario;
  //   }
  // }

  // removerCarrinho(item){
  //   this.valorTotal-=item.produtos.valorUnitario;
  //   this.carrinho = this.carrinho.filter(prod=>prod != item
  //   )
  // }
}