import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cadastro } from 'src/app/models/Cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formRegister: FormGroup;

  constructor() {
    this.formRegister = this.createForm(new Cadastro("@gmail.com","Samuel Weslley", 41851766863,null,null,1222323));
  }

  private createForm(cadastro: Cadastro): FormGroup {
    return new FormGroup({
      email: new FormControl(cadastro.email),
      fullName: new FormControl(cadastro.fullName),
      numCPF: new FormControl(cadastro.numCPF),
      birthDate: new FormControl(cadastro.birthDate),
      genre: new FormControl(cadastro.genre),
      telephone: new FormControl(cadastro.telephone)
    })
  }

  enviarCadastro() {
    
  }

  ngOnInit(): void {
  }

}
