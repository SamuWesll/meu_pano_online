import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Cadastro } from 'src/app/models/Cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    email: ['email'],
    fullName: ['Samuel'],
    numCPF: [''],
    birthDate: [''],
    genre: [''],
    telephone: [''],
    cell: [''],
    password: [''],
  })

  // private createForm(cadastro: Cadastro): FormGroup {
  //   return new FormGroup({
  //      new FormControl(cadastro.email),
  //     
  //   })
  // }

  enviarCadastro() {
    
  }

  ngOnInit(): void {
  }

}
