import { Component, OnInit, ViewChild } from '@angular/core';
import { Produtos } from "src/app/models/Produtos";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: 'app-produtos-categoria',
  templateUrl: './produtos-categoria.component.html',
  styleUrls: ['./produtos-categoria.component.css']
})
export class ProdutosCategoriaComponent implements OnInit {

  public produtos: Produtos[];

  converteDecimal(valor: string): string {
    return parseFloat(valor).toFixed(2).replace('.',',')
  };

  constructor(private http: HttpService) {
    // this.http.getProdutos().subscribe(
    //   (data) => {
    //     this.produtos = data;
    //     console.log(this.produtos)
    //   }
    // )
   }

  ngOnInit(): void {
  }

}
