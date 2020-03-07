import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  public produtos: Produtos[] = [];


  constructor(private http: HttpService) {
    
    this.http.getProdutos().subscribe(
      (data) => {
        this.produtos = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
