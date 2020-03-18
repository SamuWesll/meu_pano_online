import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
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

  public produtos: Produtos[]=[];

  constructor(public carrinho: CarrinhoService) {  }

  ngOnInit(): void {
  }

}
