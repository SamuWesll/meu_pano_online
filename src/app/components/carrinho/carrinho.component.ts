import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Carrinho } from 'src/app/models/Carrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

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
      numCartao: new FormControl(carrinho.numCartao),
      dtValidade: new FormControl(carrinho.dtValidade),
      validade: new FormControl(carrinho.validade),
      nomeTitular: new FormControl(carrinho.nomeTitular),
      cpfTitular: new FormControl(carrinho.cpfTitular)

    })
  }

  constructor() { }

  ngOnInit(): void {

  }

}
