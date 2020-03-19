import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule } from  'angular/FormsModule;
// import { AngularFontAwesomeModule } from "angular-font-awesome";

import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalhadoComponent } from './components/produto-detalhado/produto-detalhado.component';
import { ProdutosSimilaresComponent } from './components/produtos-similares/produtos-similares.component';
import { ConsultarFreteComponent } from './components/consultar-frete/consultar-frete.component';
import { ProdutosCategoriaComponent } from './components/produtos-categoria/produtos-categoria.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NavComponent } from './components/nav/nav.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NgxViacepModule } from '@brunoc/ngx-viacep'; // Importando o módulo
// import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    LoginComponent,
    ListaDeProdutosComponent,
    ProdutosComponent,
    ProdutoDetalhadoComponent,
    ProdutosSimilaresComponent,
    ConsultarFreteComponent,
    ProdutosCategoriaComponent,
    NavComponent,
    PedidoComponent,
    CheckoutComponent,
    

  ],
  imports: [
    BrowserModule,
    NgxViacepModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    // AngularFontAwesomeModule,
    HttpClientModule,
    
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }