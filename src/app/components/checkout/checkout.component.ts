import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './../../services/http.service';
import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Checkout } from 'src/app/models/Checkout';
import { HttpClient } from "@angular/common/http";
import { NgxViacepService, Endereco, ErroCep } from '@brunoc/ngx-viacep';
import { ModalDirective } from 'angular-bootstrap-md';
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho';
import { Produtos } from 'src/app/models/Produtos';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Router } from '@angular/router';
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

  cliente: any = {
    nome: "",
  };
  carrinho: any;

  idEndereco: number = null;

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

  
  title = 'app';

  constructor(private viacep: NgxViacepService, 
              private Http: HttpClient, 
              private httpCliente: ClienteService, 
              private httpEndereco: EnderecoService,
              private carrinhoService: CarrinhoService,
              private pedidoService: PedidoService,
              private router: Router,
  ) {} // Injetando o serviço

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
};

selecionarEndereco(id) {
  this.idEndereco = parseInt(id);
  console.log(this.idEndereco)
}

mascaraValor(valor: number) {
  return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
}

carrinhoDeCompra() {
  let qtdProduto: number = 0;
  let valorProduto: number = 0;

  for(let i = 0; i < this.carrinho.length; i++) {
    qtdProduto += this.carrinho[i].contador;
    valorProduto += this.carrinho[i].valorDesconto * this.carrinho[i].contador;
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

  let body = {
    bairro: form['bairro'],
    cep: form['cep'],
    cidade: form['cidade'],
    complemento: form['complemento'],
    logradouro: form['ender'],
    numTelefone: "11984670655",
    numero: form['numero'],
    referencia: null,
    tb_cliente_id_cliente: this.cliente['idCliente'],
    uf: form['estado']
  }

  this.httpEndereco.postEndereco(body).subscribe(
    (data) => {
      this.cliente.tb_endereco_id_cliente.push(data);
    }
  )

}

deletarEndere(idEndereco: string) {

  this.httpEndereco.deletarEndereco(idEndereco).subscribe(
      () => console.log(`o endereço do id: ${idEndereco} foi deletado`),
      (err) => console.log(err)
  )
    // (data) => {
    //   if(data == "Endereço não encontrado!") {
    //     return alert(data)
    //   } else {
    //     alert("Endereço deletado");
    //     let arrayEndereco: any[] = this.cliente.tb_endereco_id_cliente;
    //     this.cliente.tb_endereco_id_cliente = arrayEndereco.filter((end) => {
    //       return idEndereco != end['idEndereco']
    //     });
    //     this.idEndereco = null;
    //   }
    // }
  

  console.log(idEndereco)
  console.log(this.cliente.tb_endereco_id_cliente)
}

postCliente() {

  let cli = JSON.parse(localStorage.getItem("logado"))

  this.httpCliente.getClienteId(cli['idCliente']).subscribe(
    (body) => {
      this.cliente = body;
    }
  )

}

getCarrinho() {
  this.carrinhoService.getCarrinho().subscribe(
    (produto) => {
      console.log(produto)
      return this.carrinho = produto;
    }
  )
}

deleteCarrinho() {
  this.carrinhoService.limparCarrinhoStorage();
  // this.carrinhoService.remover(this.carrinho).subscribe(
  //   success => {
  //     console.log(success)
  //   },
  //   _ => console.log('Erro 400'));
}

criarPedido() {

  let produtosCarrinhos: object[] = [];

  for(let i = 0; i < this.carrinho.length; i ++) {
    let p1 = {
      produto: this.carrinho[i].idProduto,
      qtdProduto: this.carrinho[i].contador,
      valorProduto: this.carrinho[i].contador * this.carrinho[i].valorDesconto
      };
    produtosCarrinhos.push(p1)
  }

  let pedido = {
    
      formaPgto: "cartão de crédito",
      itensPedido: produtosCarrinhos,
      tb_cliente_id_cliente: this.cliente['idCliente'],
      tb_endereco_id_endereco: this.idEndereco,
      totalCompra: this.valorProdutos,
      valorFrete: this.valorFreteRadio
    
  };

  this.pedidoService.criarPedido(pedido).subscribe(
    (pedido) => {
      console.log(pedido);
      if(pedido['idPedido'] > 0) {
        this.deleteCarrinho();
        this.modal.toggle();
        
      }
    }
  )
  
}

pageHome() {
  this.router.navigate(["/home"]);
};

public f : FormGroup
  ngOnInit() {

    this.postCliente();

    this.getCarrinho();

    this.valorFreteRadio =  7.99

    this.carrinhoDeCompra();

    // this.f = this.formBuilder.group({
    //   cep: new FormControl('', Validators.compose([
    //   Validators.required,
    //   Validators.pattern('[0-9]{5}')
    //   ])),    
    // });

   };
  

}