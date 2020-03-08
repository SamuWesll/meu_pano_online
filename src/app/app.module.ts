import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoDetalhadoComponent } from './components/produto-detalhado/produto-detalhado.component';
import { ProdutosSimilaresComponent } from './components/produtos-similares/produtos-similares.component';
import { ConsultarFreteComponent } from './components/consultar-frete/consultar-frete.component';
import { ProdutosCategoriaComponent } from './components/produtos-categoria/produtos-categoria.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    LoginComponent,
    ProdutoDetalhadoComponent,
    ProdutosSimilaresComponent,
    ConsultarFreteComponent,
    ProdutosCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }