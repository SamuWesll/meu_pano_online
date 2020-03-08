import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from "ngx-bootstrap/modal";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
