import { Injectable } from "@angular/core";
import { Produtos } from '../models/Produtos';
import { HttpClient } from '@angular/common/http';

//udar url 
const URLCarrinho: string = "http://localhost:8080/meupanoonline/produto/lista"

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService{
    info: Produtos;
    carregado = false;

    constructor(private carrinho: HttpClient){
        this.carrinho.get(URLCarrinho).subscribe((resp: Produtos)=>{
            this.carregado=true;
            this.info=resp['body'];
        })
    }
}