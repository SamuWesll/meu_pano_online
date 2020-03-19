import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { HomeComponent } from '../home/home.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private httpCliente: ClienteService, private router: Router) { }

  enviarCadastro(form) {
    let body = {
      "nome": form.value.fullName,
      "cpf": form.value.numCPF,
      "email": form.value.email,
      "senha": form.value.senha1,
      "dataNascimento": form.value.dataNasc,
      "genero": form.value.genero,
      "nrCelular": form.value.phone,
      "nrTelefone": form.value.tell
    };
    this.httpCliente.postClientes(body).subscribe(
      (data) => {
        if(data['statusCode'] == "OK") {
          this.router.navigate(['/home'])
          return alert("Cadastro realizado com sucesso");
        }
        // return console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
