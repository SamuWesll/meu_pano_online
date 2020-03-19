import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../../services/http.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Checkout } from 'src/app/models/Checkout';
import { HttpClient } from "@angular/common/http";
import { NgxViacepService, Endereco, ErroCep, ErrorValues } from '@brunoc/ngx-viacep';

//import { NgxViacepService } from '@brunoc/ngx-viacep'; // Importando o serviço
// import 'rxjs/add/operator/map';
// import { Http } from '@angular/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

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
  HttpClient: any;

  onSubmit(form){
    console.log(form);
  }

   formBuilder: any;
   formulario: any;

  private createForm(checkout: Checkout): FormGroup {
    return new FormGroup({
      // codigo: new FormControl(checkout.codigo),
      nome: new FormControl(checkout.nome),
      cpf: new FormControl(checkout.cpf),
      email: new FormControl(checkout.email),
      senha: new FormControl(checkout.senha),
      confirmarsenha: new FormControl(checkout.confirmarsenha),
      telefone: new FormControl(checkout.telefone),
      cep: new FormControl(checkout.cep),
      endereco: new FormControl(checkout.endereco),
      numero: new FormControl(checkout.numero),
      complemento: new FormControl(checkout.complemento),
      bairro: new FormControl(checkout.bairro),
      cidade: new FormControl(checkout.cidade),
      estado: new FormControl(checkout.estado),
      numCartao: new FormControl(checkout.numCartao),
      dtValidade: new FormControl(checkout.dtValidade),
      validade: new FormControl(checkout.validade),
      nomeTitular: new FormControl(checkout.nomeTitular),
      cpfTitular: new FormControl(checkout.cpfTitular)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

    })
  }

  // constructor(private Http: HttpClient) { }

  title = 'app';
  constructor( private viacep: NgxViacepService ) {} // Injetando o serviço

  consultaCEP(cep: string){
    
    this.viacep.buscarPorCep("04949130").then(
      (endereco: Endereco) => {
        this.usuario.endereco = endereco.logradouro;
        console.log(endereco);
      }
    ).catch(
      (error: ErroCep) => {
        console.log(error.message)
      }
    )

        // console.log(cep);
        // // variavel (cep) somente com digitos
        // cep = cep.replace(/\D/g, '');

        // //verifica se campo cep possui valor informado
        // if (cep != ""){

        //   //expressão regular para validar o cep.
        //   var validacep = /^[0-9]{8}$/;

        //   //valida o formato do cep
        //   if(validacep.test(cep)){

        //     this.HttpClient.get(`//viacep.com.br/ws/${cep}/json`)
        //     .map(dados => dados.json())
        //     .subscribe(dados => console.log(dados));
        //   }
        // }
  }

  
  ngOnInit(): void {

    this.consultaCEP("04949130");

  }
  

    // this.viacep.buscarPorCep('01001000').then( ( endereco: Endereco ) => {
    //  //  Endereço retornado :)
    //   console.log(endereco);
    //  }).catch( (error: ErroCep) => {
    //  //  Alguma coisa deu errado :/
    //   console.log(error.message);
    //  });

    

//   consultaCEP(cep){
//      fetch(`https://viacep.com.br/ws/${cep}/json`)
//      .then(response => response.json())
//      .then(dados =>{
//          if(dados.erro){
//              return cep.setAttribute('class', 'form-control is-invalid')
//          }
//          cep.setAttribute('class', 'form-control is valid')
         
//          endereco.value = dados.endereco
//          bairro.value = dados.bairro
//          cidade.value = dados.cidade
//          estado.value = dados.estado
//      })
//  }

}

