import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})


export class EnderecoComponent implements OnInit {

  constructor(private viacep: NgxViacepService) {
    
  }

  consultarCep(cep: string) {
    this.viacep.buscarPorCep(cep)
      .then(
        (enderero: Endereco) => {
          console.log(enderero);
      }).catch(
        (error: ErroCep) => {
          console.log(error.message)
        }
      ) 
  }

  ngOnInit(): void {

  }

}
