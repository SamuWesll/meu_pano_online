import { Component, OnInit, Input } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public produtos: Produtos[] = [];

  converteDecimal(valor: string): string {
    return parseFloat(valor).toFixed(2).replace('.', ',')
  };

  tresParcelas(valor: number): string {
    valor /= 3
    return valor.toFixed(2).replace('.', ',')
  }

  constructor(public http: HttpService) { }

  ngOnInit(): void {
  }

}
