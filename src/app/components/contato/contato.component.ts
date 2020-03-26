import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Contato } from "src/app/models/Contato";
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formContato: FormGroup;

  // constructor(private http: HttpService) {
  //   this.formContato = this.createForm(new Contato('', '', '', ''))
  //  }

  private createForm(contato: Contato): FormGroup {
    return new FormGroup({
      // codigo: new FormControl(contato.codigo),
      nome: new FormControl(contato.nome),
      email: new FormControl(contato.email),
      telefone: new FormControl(contato.telefone),
      mensagem: new FormControl(contato.mensagem)
    })
  }

  contactar(formContato) {
    
  }
 
  ngOnInit(): void {
  }

}
