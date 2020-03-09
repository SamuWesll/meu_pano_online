import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ModalModule } from "ngx-bootstrap/modal";

=======
// import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from '@angular/common/http';
>>>>>>> samuel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';

>>>>>>> samuel

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
<<<<<<< HEAD
    LoginComponent
=======
    ListaDeProdutosComponent,
    ProdutosComponent,
>>>>>>> samuel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ModalModule.forRoot()
=======
    // AngularFontAwesomeModule,
    HttpClientModule

>>>>>>> samuel
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
