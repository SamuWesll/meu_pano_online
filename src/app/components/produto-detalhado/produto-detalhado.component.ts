import { Component, OnInit } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from 'src/app/services/http.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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

  public produtoDetalhado: Produtos;
  public contador: number;
  public produtos: Produtos[] = [];

  constructor(private http: HttpService,
    private carrinhoService: CarrinhoService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router,
    private httpProduto: ProdutoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      this.http.getProdutoById(parametros['id']).forEach(produto => {
        this.produtoDetalhado = produto['body']
      })
    })
  }

  adicionarCarrinho() {
    this.carrinhoService
      .adicionarItem(new ProdutoCarrinho(this.produtoDetalhado, this.contador))
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