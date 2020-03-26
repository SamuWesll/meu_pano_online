import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoDetalhadoComponent } from "./components/produto-detalhado/produto-detalhado.component";
import { ProdutosCategoriaComponent } from "./components/produtos-categoria/produtos-categoria.component";
import { ProdutosComponent } from './components/produtos/produtos.component';
import { BuscaComponent } from './components/busca/busca.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
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
    path: "cadastro",
    component: CadastroComponent
  },
  // {
  //   path: "produtos/categoria/0",
  //   component: ProdutosComponent
  // },
  {
    path: "produtos/:id",
    component: ProdutoDetalhadoComponent
  },
  {
    path: "produtos/categoria/:categoria",
    component: ProdutosComponent
  },
  {
    path: "busca/:produto",
    component: BuscaComponent
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
