import { Component, OnInit } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from 'src/app/services/http.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { CookieService } from 'ngx-cookie-service';

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
  public contador: number;

  constructor(private http: HttpService,
    private carrinhoService: CarrinhoService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private router: Router) {   }

  ngOnInit(): void {
    this.
  }

  adicionarCarrinho() {
    this.carrinhoService
        .adicionarItem(new ProdutoCarrinho(this.produtos, this.contador))
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