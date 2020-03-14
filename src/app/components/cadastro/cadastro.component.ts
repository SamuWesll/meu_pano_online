import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { Cadastro } from 'src/app/models/Cadastro';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private http: HttpService) { }

  // private createForm(cadastro: Cadastro): FormGroup {
  //   return new FormGroup({
  //      new FormControl(cadastro.email),
      
  //   })
  // }

  enviarCadastro(form) {
    // let retorno: string
    // this.http.postClientes().subscribe(
    //   data => {
    //     return console.log(data)
    //   }
    // )
    console.log(form.value.fullName)
  }

  ngOnInit(): void {
  }

}
