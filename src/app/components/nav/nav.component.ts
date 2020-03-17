import { Component, OnInit } from '@angular/core';

interface iCategoria{
  label: string;
  route: string;
  ativo: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    item:iCategoria[]=[
    {
      ativo: true,
      label: "Todas as Categorias",
      route: "/produtos"
    },
    {
      ativo: false,
      label: "Desenhados",
      route: "/desenhados"
    },
    {
      ativo: false,
      label: "Bordados",
      route: "/bordados"
    },
    {
      ativo: false,
      label: "Com Barra",
      route: "/barra"
    },
    {
      ativo: false,
      label: "Frases",
      route: "/frases"
    }
  ]

  constructor() { }

  destacar(item: iCategoria){
    this.item.forEach(
      (item)=>{item.ativo=false}
    )
    item.ativo=true;
  }

  ngOnInit(): void {
  }

}
