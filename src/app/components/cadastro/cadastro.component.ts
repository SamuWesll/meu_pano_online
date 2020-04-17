import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

    let telefoneFixo: string;

    if (form.value.phone == null) {
      telefoneFixo = "";
    } else {
      telefoneFixo = form.value.phone;
    }

    let body = {
      cpf: form.value.numCPF,
      dataNascimento: this.corrigindoData(form.value.dataNasc),
      email: form.value.email,
      genero: form.value.genero,
      nome: form.value.fullName,
      numTelefoneCelular: form.value.phone,
      numTelefoneFixo: telefoneFixo,
      senha: form.value.senha1
    };
    this.httpCliente.postClientes(body).subscribe(
      (data) => {
        // console.log(data);
        if (data) {
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

    let anoValidacao = dataAtual.getFullYear() - 18;

    let anoNasc = parseInt((data.split("-", -2))[0]);
    let mesNasc = parseInt((data.split("-", -2))[1]);
    let diaNasc = parseInt((data.split("-", -2))[2]);

    if (data == "") {
      return;
    }

    if (anoNasc > anoValidacao || anoNasc > anoValidacao && mesNasc > mesAtual && diaNasc > diaAtual) {
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
