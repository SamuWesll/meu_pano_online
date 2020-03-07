import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProdutoDetalhadoComponent } from "./components/produto-detalhado/produto-detalhado.component";
import { ProdutosCategoriaComponent } from "./components/produtos-categoria/produtos-categoria.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "produtos-categoria",
    component: ProdutosCategoriaComponent
  },
  {
    path: "produto-detalhado",
    component: ProdutoDetalhadoComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
