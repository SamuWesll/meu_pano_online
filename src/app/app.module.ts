import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxViacepModule } from '@brunoc/ngx-viacep';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { CarouselProdutos } from './components/carousel-produtos/carousel-produtos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { ProdutoDetalhadoComponent } from './components/produto-detalhado/produto-detalhado.component';
import { ProdutosSimilaresComponent } from './components/produtos-similares/produtos-similares.component';
import { ProdutosCategoriaComponent } from './components/produtos-categoria/produtos-categoria.component';
import { NavComponent } from './components/nav/nav.component';
import { BuscaComponent } from './components/busca/busca.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    LoginComponent,
    CarouselProdutos,
    ProdutosComponent,
    CadastroComponent,
    EnderecoComponent,
    ProdutosSimilaresComponent,
    ProdutosCategoriaComponent,
    NavComponent,
    BuscaComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    // AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxViacepModule,
    FormsModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }