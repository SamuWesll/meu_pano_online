import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  public produtos: Produtos[] = [];


  constructor() {}

  ngOnInit(): void {
  }

}
