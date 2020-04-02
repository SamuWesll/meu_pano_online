import { Component, OnInit } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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

  constructor(public http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // (refatorado)
    this.route.params.subscribe(parametros => {
      this.http.getProdutoById(parametros['id']).forEach((prod: Produtos) => {
        this.produtoDetalhado = prod 
      })
    })
  }
}
