import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { CarouselProdutos } from './components/carousel-produtos/carousel-produtos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { ProdutosSimilaresComponent } from './components/produtos-similares/produtos-similares.component';
import { ProdutosCategoriaComponent } from './components/produtos-categoria/produtos-categoria.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { BuscaComponent } from './components/busca/busca.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoDetalhadoComponent } from "./components/pedido-detalhado/pedido-detalhado.component";
import { CompraFinalizadaComponent } from './components/compra-finalizada/compra-finalizada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    CarouselProdutos,
    ProdutosComponent,
    CadastroComponent,
    EnderecoComponent,
    ProdutosSimilaresComponent,
    ProdutosCategoriaComponent,
    CarrinhoComponent,
    BuscaComponent, 
    CheckoutComponent,
    PageNotFoundComponent,
    PedidoComponent,
    PedidoDetalhadoComponent,
    CompraFinalizadaComponent,
  ],
  imports: [
    BrowserModule,
    NgxViacepModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxViacepModule,
    FormsModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }