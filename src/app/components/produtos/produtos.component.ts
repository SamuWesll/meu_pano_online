import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public produtos: Produtos;

  converteDecimal(valor: string): string {
    return parseFloat(valor).toFixed(2).replace('.', ',')
  };

  tresParcelas(valor: number): string {
    valor /= 3
    return valor.toFixed(2).replace('.', ',')
  }

  constructor(private httpProduto: ProdutoService, private http: HttpService) { }

  ngOnInit(): void {

    // this.httpProduto.getListaProdutos().subscribe(
    //   (body) => {
    //     this.produtos = body['body'];
    // })

  }

}
