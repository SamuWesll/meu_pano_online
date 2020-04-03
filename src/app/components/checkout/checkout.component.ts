import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../../services/http.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Checkout } from 'src/app/models/Checkout';
import { HttpClient } from "@angular/common/http";
import { NgxViacepService, Endereco, ErroCep } from '@brunoc/ngx-viacep';
import { ModalDirective } from 'angular-bootstrap-md';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho';
import { Produtos } from 'src/app/models/Produtos';
import { ClienteService } from 'src/app/services/cliente.service';
// import 'rxjs/add/operator/map';
// import { Http } from '@angular/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  valorFreteRadio: any;
  valorProdutos: any;
  qtdProdutos: number;

  cliente: any;

  carrinho: any[] = [{
    id: 1,
    nome: "pano 1",
    qtdProdut: 2,
    valor: 7.40
  }, {
    id: 2,
    nome: "pano 2",
    qtdProdut: 1,
    valor: 13
  }, 
  {
    id: 3,
    nome: "pano 3",
    qtdProdut: 5,
    valor: 13
  }
  ]

  usuario: any = {
    nome: null,
    cpf: null,
    email: null,
    senha: null,
    confSenha: null,
    telefone: null,
    cep: null,
    endereco: null,
    complemento: null,
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
    // console.log(form);
  }

   formBuilder: any;
   formulario: any;

  private createForm(checkout: Checkout): FormGroup {
    return new FormGroup({

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

  enderecos: any[] = [{
    endereco: "Rua Baltazar Lopes Fragoso",
    numero: "122",
    complemento: "Qualquer coisa",
    bairro: "Jardim Aracati",
    cidade: "São Paulo",
    estado: "SP",
    cep: "04949130",
    idEndereco: 123,
    }, 
    // {
    // endereco: "Rua 1",
    // numero: "122",
    // complemento: "Qualquer coisa",
    // bairro: "Jardim Aracati",
    // cidade: "São Paulo",
    // estado: "SP",
    // cep: "04949130",
    // idEndereco: 321,
    // },
    // {
    // endereco: "Rua Baltazar Lopes Fragoso",
    // numero: "122",
    // complemento: "Qualquer coisa",
    // bairro: "Jardim Aracati",
    // cidade: "São Paulo",
    // estado: "SP",
    // cep: "04949130",
    // idEndereco: 231,
    // },
  ]

  
  title = 'app';

  constructor( private viacep: NgxViacepService, private Http: HttpClient, private httpCliente: ClienteService) {} // Injetando o serviço

  consultaCEP(cep: string){

    if (cep != ""){
    var validacep = /^[0-9]{8}$/;

    this.viacep.buscarPorCep(cep).then(
      (endereco: Endereco) => {
        this.usuario.endereco = endereco.logradouro;
        this.usuario.complemento = endereco.complemento;
        this.usuario.bairro = endereco.bairro;
        this.usuario.cidade = endereco.localidade;
        this.usuario.estado = endereco.uf;
      }
    ).catch(
      (error: ErroCep) => {
        return 
      }
    )}

}

valorFrete(valor: number) {
  this.valorFreteRadio = valor;
}

mascaraValor(valor: number) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

carrinhoDeCompra() {
  let qtdProduto: number = 0;
  let valorProduto: number = 0;

  for(let i = 0; i < this.carrinho.length; i++) {
    qtdProduto += this.carrinho[i].qtdProdut;
    valorProduto += this.carrinho[i].valor * this.carrinho[i].qtdProdut;
  }
  
  this.valorProdutos = valorProduto;
  this.qtdProdutos = qtdProduto;
}

adicionarZero(numero: number) {
  if(numero < 10) {
    return "0" + numero;
  };
  return numero;
};

cadastrarNovoEndereco(form) {

  let novoEndereco = {
    endereco: form['ender'],
    numero: form['numero'],
    complemento: form['complemento'],
    bairro: form['bairro'],
    cidade: form['cidade'],
    estado: form['estado'],
    cep: form['cep'],
    idEndereco: 21312,
  }

  this.enderecos.push(novoEndereco)
}

postCliente() {

  let cli = JSON.parse(localStorage.getItem("logado"))

  this.httpCliente.getClienteId(cli['idCliente']).subscribe(
    (body) => {
      this.cliente = body;
      return console.log(this.cliente);
    }
  )

}

public f : FormGroup
  ngOnInit() {

    this.postCliente(); 

    this.valorFreteRadio =  7.99

    this.carrinhoDeCompra();

    this.f = this.formBuilder.group({
      cep: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[0-9]{5}')
      ])),    
    })
   }

}