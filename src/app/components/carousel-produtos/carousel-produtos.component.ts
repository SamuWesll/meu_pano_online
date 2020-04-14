import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carousel-produtos',
  templateUrl: './carousel-produtos.component.html',
  styleUrls: ['./carousel-produtos.component.css']
})
export class CarouselProdutos implements OnInit {

  public produtos: Produtos[];

  converteDecimal(valor: string): string {
    return parseFloat(valor).toFixed(2).replace('.', ',')
  };

  tresParcelas(valor: number): string {
    valor /= 3
    return valor.toFixed(2).replace('.', ',')
  }

  constructor(public httpProduto: ProdutoService) { }

  ngOnInit(): void {
    this.httpProduto.getMaisVendidos().pipe(map(data => data))
      .forEach((prod: Produtos[]) => this.produtos = prod)
  }
}
