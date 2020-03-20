import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Categorias } from 'src/app/models/Categorias';
import { HttpService } from 'src/app/services/http.service';
import { Produtos } from 'src/app/models/Produtos';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() produto: Produtos;
  public categorias: Categorias[] = [];

  @Output() categoriaClicada = new EventEmitter();

  private categoriaTotal: Categorias = new Categorias(0, 'Todas as Categorias')

  constructor(private http: HttpService) {
    this.http.carregarCategorias().subscribe(cat => {
      this.categorias.push(this.categoriaTotal)
      cat['body'].forEach(c => this.categorias.push(new Categorias(c.idCategoria, c.descricao)))
    })
  }

  ngOnInit(): void {
  }

}
