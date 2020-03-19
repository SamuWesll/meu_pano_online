import { Component, OnInit } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detalhado',
  templateUrl: './produto-detalhado.component.html',
  styleUrls: ['./produto-detalhado.component.css']
})
export class ProdutoDetalhadoComponent implements OnInit {

  converteDecimal(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  public produtos: Produtos[] = [];
  public produtoDetalhado: Produtos;

  constructor(public http: HttpService, private route: ActivatedRoute, private httpProduto: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      // console.log(parametros['id'])
      this.http.getProdutoById(parametros['id']).forEach(produto => {
        // console.log(produto['body'])
        this.produtoDetalhado = produto['body']
      })
    })

  //   this.http.getProdutos().subscribe(
  //     (data) => {
  //       this.produtos=data;
  //     }
  //   )
   }
}
