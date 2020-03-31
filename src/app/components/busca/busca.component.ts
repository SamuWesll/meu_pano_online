import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  converteDecimal(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  tresParcelas(valor: number): string {
    valor /= 3
    return valor.toFixed(2).replace('.', ',')
  }

  constructor(private route: ActivatedRoute, public http: HttpService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.http.pesquisarProduto(params['produto']))
  }
}
