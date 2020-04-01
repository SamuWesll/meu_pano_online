import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxViacepModule } from '@brunoc/ngx-viacep';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md'
// import { FormsModule } from  'angular/FormsModule;
// import { AngularFontAwesomeModule } from "angular-font-awesome";
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
import { ProdutoDetalhadoComponent } from './components/produto-detalhado/produto-detalhado.component';
import { ProdutosSimilaresComponent } from './components/produtos-similares/produtos-similares.component';
import { ProdutosCategoriaComponent } from './components/produtos-categoria/produtos-categoria.component';
import { NavComponent } from './components/nav/nav.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { BuscaComponent } from './components/busca/busca.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
// import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    NavComponent,
    CarrinhoComponent,
    BuscaComponent, 
    CheckoutComponent,
    PageNotFoundComponent,
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
    // AngularFontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }