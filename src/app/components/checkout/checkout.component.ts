import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Checkout } from 'src/app/models/Checkout';
import { HttpClient } from "@angular/common/http";
import { NgxViacepService, Endereco, ErroCep } from '@brunoc/ngx-viacep';
import { ModalDirective } from 'angular-bootstrap-md';
import { ClienteService } from 'src/app/services/cliente.service';
import { EnderecoService } from 'src/app/services/endereco.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';

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

  pedidoFinaliza: object = {
    idPedido: '',
    valorFrete: 0,
    totalCompra: 0,
    formaPgto: "",
    tb_cliente_id_cliente: 0,
    tb_endereco_id_endereco: 0,
    itensPedido: []
  }

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

  onSubmit(form) {
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
  ) { } // Injetando o serviço

  consultaCEP(cep: string) {

    if (cep != "") {
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
      )
    }

  }

  valorFrete(valor: number) {
    this.valorFreteRadio = valor;
  };

  selecionarEndereco(id) {
    this.idEndereco = parseInt(id);
  }

  mascaraValor(valor: number) {
    return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
  }

  carrinhoDeCompra() {
    let qtdProduto: number = 0;
    let valorProduto: number = 0;

    for (let i = 0; i < this.carrinho.length; i++) {
      qtdProduto += this.carrinho[i].contador;
      valorProduto += this.carrinho[i].valorDesconto * this.carrinho[i].contador;
    }

    this.valorProdutos = valorProduto;
    this.qtdProdutos = qtdProduto;
  }

  adicionarZero(numero: number) {
    if (numero < 10) {
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
        this.cliente.tb_endereco_id_endereco.push(data);
      }
    )
  }

  deletarEndere(idEndereco: number) {
    this.httpEndereco.deletarEndereco(idEndereco).subscribe(
      () => {
        this.cliente.tb_endereco_id_endereco.forEach(end => {
          if (end.idEndereco == idEndereco) {
            this.cliente.tb_endereco_id_endereco.splice(end, 1)
          }
        });
      },
      (err) => console.log(err)
    )
  }

  postCliente() {
    let cli = JSON.parse(localStorage.getItem("logado"))
    this.httpCliente.getClienteId(cli['idCliente']).subscribe((body) => this.cliente = body)
  }

  getCarrinho() {
    this.carrinhoService.getCarrinho().subscribe((produto) => this.carrinho = produto)
  }

  deleteCarrinho() {
    this.carrinhoService.limparCarrinhoStorage();
  }

  criarPedido() {
    let produtosCarrinhos: object[] = [];

    for (let i = 0; i < this.carrinho.length; i++) {
      let p1 = {
        produto: this.carrinho[i].idProduto,
        qtdProduto: this.carrinho[i].contador,
        valorProduto: this.carrinho[i].contador * this.carrinho[i].valorDesconto
      };
      produtosCarrinhos.push(p1)
    }

    let pedido = {
      formaPgto: "Cartão de Crédito",
      itensPedido: produtosCarrinhos,
      tb_cliente_id_cliente: this.cliente['idCliente'],
      tb_endereco_id_endereco: this.idEndereco,
      totalCompra: this.valorProdutos,
      valorFrete: this.valorFreteRadio,
      status: "Aguardando confirmação de pagamento",
      dataPedido: new Date()
    };

    this.pedidoService.criarPedido(pedido).subscribe(
      (pedido) => {
        this.pedidoFinaliza = pedido
        if (pedido['idPedido'] > 0) {
          this.deleteCarrinho();
          this.router.navigate(['/checkout/compra-finalizada'])
          localStorage.setItem('pedidoFinalizado', JSON.stringify(pedido))
        }
      }
    )
  }

  pageHome() {
    this.router.navigate(["/home"]);
  };

  public f: FormGroup
  ngOnInit() {

    this.postCliente();

    this.getCarrinho();

    this.valorFreteRadio = 7.99

    this.carrinhoDeCompra();
  };
}