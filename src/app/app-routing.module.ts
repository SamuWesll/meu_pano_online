import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ProdutoDetalhadoComponent } from "./components/produto-detalhado/produto-detalhado.component";
import { ProdutosCategoriaComponent } from "./components/produtos-categoria/produtos-categoria.component";
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CarrinhoComponent } from "./components/carrinho/carrinho.component";
import { BuscaComponent } from './components/busca/busca.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PedidoComponent } from "./components/pedido/pedido.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "carrinho",
    component: CarrinhoComponent
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
  {
    path: "produtos/detalhes/:id",
    component: ProdutoDetalhadoComponent
  },
  {
    path: "produtos/categoria/:id",
    component: ProdutosComponent
  },
  {
    path: "busca/:produto",
    component: BuscaComponent
  },
  {
    path: "carrinho/checkout",
    component: CheckoutComponent
  },
  {
    path: "pedidos",
    component: PedidoComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
