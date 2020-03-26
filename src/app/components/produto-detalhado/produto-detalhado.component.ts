import { Component, OnInit } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from 'src/app/services/http.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhado',
  templateUrl: './produto-detalhado.component.html',
  styleUrls: ['./produto-detalhado.component.css']
})
export class ProdutoDetalhadoComponent implements OnInit {

  convertDecimal(valor: string): string{
    return parseFloat(valor).toFixed(2).replace('.', ',');
  }

  public produtos: Produtos;

  constructor(public http: HttpService, public carrinhoService: CarrinhoService, public router: Router) {
  //   this.http.getProdutos().subscribe(
  //     (data) => {
  //       this.produtos=data;
  //     }
  //   )
   }

  ngOnInit(): void {
  }

  adicionarCarrinho() {
    this.carrinhoService
        .adicionarItem(new ProdutoCarrinho(this.produtos, this.count))
        .subscribe(
            res => {
              if (!res) {
                console.log('Erro' + res);
                throw new Error();
              }
              this.router.navigateByUrl('/carrinho');
            },
            _ => console.log('Erro')
        );
  }
}