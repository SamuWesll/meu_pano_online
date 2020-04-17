import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Contato } from "src/app/models/Contato";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato: FormGroup;
  mailText: string = "";
  links: any[] = [];

  private createForm(contato: Contato): FormGroup {
    return new FormGroup({
      nome: new FormControl(contato.nome),
      email: new FormControl(contato.email),
      telefone: new FormControl(contato.telefone),
      mensagem: new FormControl(contato.mensagem)
    })
  }

  envioEmail(message: string, nome: string, tell: string) {
    this.links.push(message, "nome: " + nome, "contato: " + tell)
    this.mailText = "mailto:contato@panooline.com?subject=files&body=" + this.links.join(" ,");
    window.location.href = this.mailText;
  }

  ngOnInit(): void {
  }

}
