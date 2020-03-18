import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Carrinho } from 'src/app/models/Carrinho';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {


  usuario: any = {
    nome: null,
    cpf: null,
    email: null,
    senha: null,
    confSenha: null,
    telefone: null,
    cep: null,
    endereco: null,
    numero: null,
    bairro: null,
    cidade: null,
    estado: null,
    numCartao: null,
    dtValidade: null,
    cdSeguranca: null,
    nomeTitular: null,
    cpfTitular: null
  }
  HttpClientModule: any;

  onSubmit(form){
    console.log(form);
  }

   formBuilder: any;
   formulario: any;

  private createForm(carrinho: Carrinho): FormGroup {
    return new FormGroup({
      // codigo: new FormControl(carrinho.codigo),
      nome: new FormControl(carrinho.nome),
      cpf: new FormControl(carrinho.cpf),
      email: new FormControl(carrinho.email),
      senha: new FormControl(carrinho.senha),
      confirmarsenha: new FormControl(carrinho.confirmarsenha),
      telefone: new FormControl(carrinho.telefone),
      cep: new FormControl(carrinho.cep),
      endereco: new FormControl(carrinho.endereco),
      numero: new FormControl(carrinho.numero),
      complemento: new FormControl(carrinho.complemento),
      bairro: new FormControl(carrinho.bairro),
      cidade: new FormControl(carrinho.cidade),
      estado: new FormControl(carrinho.estado),
      numCartao: new FormControl(carrinho.numCartao),
      dtValidade: new FormControl(carrinho.dtValidade),
      validade: new FormControl(carrinho.validade),
      nomeTitular: new FormControl(carrinho.nomeTitular),
      cpfTitular: new FormControl(carrinho.cpfTitular)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

    })
  }

  constructor(private Http: HttpClientModule) { }

  ngOnInit(): void {
  }
  

  consultaCEP(cep){
    console.log(cep);
    // variavel (cep) somente com digitos
     cep = cep.replace(/\D/g, '');

     //verifica se campo cep possui valor informado
     if (cep != ""){

       //expressão regular para validar o cep.
       var validacep = /^[0-9]{8}$/;

       //valida o formato do cep
       if(validacep.test(cep)){

         this.HttpClientModule.get(`//viacep.com.br/ws/${cep}/json`)
         .map(dados => dados.json())
         .subscribe(dados => console.log(dados));
       }
     }
  }
}