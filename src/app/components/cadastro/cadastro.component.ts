import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { HomeComponent } from '../home/home.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { formatDate, DatePipe } from '@angular/common';

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
      "idCliente": 0,
      "nome": form.value.fullName,
      "cpf": form.value.numCPF,
      "email": form.value.email,
      "senha": form.value.senha1,
      "dataNascimento": this.corrigindoData(form.value.dataNasc),
      "genero": form.value.genero,
      // "nrCelular": form.value.phone,
      // "nrTelefone": form.value.tell
    };
    this.httpCliente.postClientes(body).subscribe(
      (data) => {
        console.log(data);
        if(data) {
          this.router.navigate(['/home']);
          return alert("Cadastro realizado com sucesso");
        } else {
          alert(data['status'])
        }
      }
    )
  };

  validarMaioridade(data: string) {
    let dataAtual = new Date();
    let diaAtual = dataAtual.getDay();
    let mesAtual = dataAtual.getMonth();

    let anoValidacao = dataAtual.getFullYear() -18 ;

    let anoNasc = parseInt((data.split("-", -2))[0]);
    let mesNasc = parseInt((data.split("-", -2))[1]);
    let diaNasc = parseInt((data.split("-", -2))[2]);

    if(data == "") {
      return;
    }

    if(anoNasc > anoValidacao || anoNasc > anoValidacao && mesNasc > mesAtual && diaNasc > diaAtual) {
      return alert('Voce não tem 18 anos completos.Por favor, direcionar o cadastrado para alguem de maior!');
    }
  }

  corrigindoData(data: string) {

    let anoNasc = (data.split("-", -2))[0];
    let mesNasc = (data.split("-", -2))[1];
    let diaNasc = 1 + parseInt((data.split("-", -2))[2]);
    let diaAtualizado = null;
    let dataString = null;

    if (diaNasc <= 9) {
      diaAtualizado = "0" + diaNasc;
      dataString = anoNasc + "-" + mesNasc + "-" + diaAtualizado;
    } else {
      dataString = anoNasc + "-" + mesNasc + "-" + diaNasc;
    }

    return dataString;
  }

  ngOnInit(): void {
  }

}
