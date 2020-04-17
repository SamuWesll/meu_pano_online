import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { FormControl } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { ClienteService } from 'src/app/services/cliente.service';
import { Sexo } from 'src/app/models/Sexo';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/models/Categorias';
import { CategoriaService } from 'src/app/services/categoria.service';
import { map } from "rxjs/operators";
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  public login: Cliente;
  public categorias: Categorias[] = [];

  private categoriaTotal: Categorias = new Categorias(0, 'Todas as Categorias');

  emaiOuCpflInput = new FormControl();
  senhaInput = new FormControl();
  contadorCarrinho = 0;

  constructor(private httpCliente: ClienteService, private router: Router, private categoria: CategoriaService, private carrinhoService: CarrinhoService) {
    this.categoria.carregarCategorias().pipe(map((data: any[]) => {
      this.categorias.push(this.categoriaTotal)
      return data.map(cat => {
        return this.categorias.push(new Categorias(cat.idCategoria, cat.descricao))
      })
    })).subscribe()
    
    this.checarCarrinho();
  }



  realizarLogin() {
    let validarCampor: any = this.emaiOuCpflInput.value.indexOf('@');
    if (validarCampor >= 0) {
      let body = {
        "email": this.emaiOuCpflInput.value,
        "senha": this.senhaInput.value,
      };
      this.httpCliente.postLogin(body).subscribe(
        (data) => {
          if (data == "Cliente não cadastrado") {
            alert(data);
          } else if (data != "Cliente não cadastrado") {
            this.logadoLocalStorage(data);
            this.verificarLogin();
            return alert('Login realizado com sucesso')
          }
        }
      )
    } else {
      let body = {
        "cpf": this.emaiOuCpflInput.value,
        "senha": this.senhaInput.value,
      };
      this.httpCliente.postLoginCpf(body).subscribe(
        (data) => {
          if (data == "Cliente não cadastrado") {
            alert(data['body']);
          } else if(data != "Cliente não cadastrado") {
            this.logadoLocalStorage(data);
            this.verificarLogin();
            return alert('Login realizado com sucesso')
          }
        }
      )
    }


    this.emaiOuCpflInput.setValue('');
    this.senhaInput.setValue('');

  }

  // Função para carregar as informações do cliente
  logadoLocalStorage(body) {

    let gen: Sexo;

    if (body.genero == "m") {
      gen = Sexo.masculino;
    } else if (body.genero == "f") {
      gen = Sexo.feminino;
    }

    let cliente = {
      idCliente: body['idCliente'],
      nome: body['nome'],
      cpf: body['cpf'],
      email: body['email'],
      senha: null,
      dataNascimento: formatDate(body['dataNascimento'], 'dd/MM/yyyy', 'en-BR'),
      genero: gen,
    }

    localStorage.setItem("logado", JSON.stringify(cliente));

    this.login = new Cliente(
      cliente.idCliente,
      cliente.nome,
      cliente.cpf,
      cliente.email,
      cliente.senha,
      cliente.dataNascimento,
      cliente.genero
    );

  }

  // this.sairLogin();

  verificarLogin() {

    this.login = JSON.parse(localStorage.getItem("logado"));

  }

  sairLogin() {

    localStorage.removeItem("logado");

    this.verificarLogin();

  }

  separarNome(nome: string) {
    let separado = nome.split(" ", 1)
    return separado;
  }

  checarCarrinho(){
    this.carrinhoService
    .getCarrinho()
    .subscribe((data) => { 
      for(let i = 0; i < data.length; i++ ){
        this.contadorCarrinho += data[i].contador 
      }
    }) 
  }

  ngOnInit(): void {
    this.verificarLogin();
   
  }

  btnFiltro(id: number) {
    this.router.navigate(['/produtos/categoria', id])
  }

  produtosNoCarrinho(id: number){
    this.router.navigate(['/carrinho', id])
  }

  pesquisarProduto(pesquisa: string) {
    if (pesquisa.length < 1) {
      return
    }

    this.router.navigate(['/busca', pesquisa])
    const input = document.querySelector('input')
    input.value = ''
  }

  historicoPedidos() {
    this.router.navigate(['/pedidos']);
    this.modal.hide();
  }

}