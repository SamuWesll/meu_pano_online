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
    return parseFloat(valor).toFixed(2).replace('.',',')
  };

  constructor(private http: HttpService) {
    this.http.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
      }
    )


    http.postClientes().subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  ngOnInit(): void {
  }

}
