import { Component, OnInit } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from 'src/app/services/http.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detalhado',
  templateUrl: './produto-detalhado.component.html',
  styleUrls: ['./produto-detalhado.component.css']
})
export class ProdutoDetalhadoComponent implements OnInit {

  convertDecimal(valor: string): string{
    return parseFloat(valor).toFixed(2).replace('.', ',');
  }

  public produto: Produtos;

  constructor(public http: HttpService, private httpProduto: ProdutoService) {
  //   this.http.getProdutos().subscribe(
  //     (data) => {
  //       this.produtos=data;
  //     }
  //   )
   }

  ngOnInit(): void {

  }

}
