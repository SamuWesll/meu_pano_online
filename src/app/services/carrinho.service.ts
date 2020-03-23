import { Injectable } from "@angular/core";
import { Produtos } from '../models/Produtos';
import { HttpClient } from '@angular/common/http';
import { Carrinho } from '../models/Carrinho';
import { ItemCarrinho } from '../models/ItemCarrinho';
import { Subject } from 'rxjs';

//udar url 
const URLCarrinho: string = "http://localhost:8080/meupanoonline/produto/lista"
//private ordersUrl = "/api/orders";
const URLPedido: string = "http://localhost:8080/meupanoonline/pedido/"

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService{
    info: Produtos;
    carregado = false;
    private carrinho: Carrinho;
    private item: ItemCarrinho = new ItemCarrinho();

    private carrinhoSubject = new Subject();
    private itemSubject = new Subject();
    private totalSubject = new Subject();

    private total: number;

    CarrinhoAtualizado = this.carrinhoSubject.asObservable();
    ItemAtualizado = this.itemSubject.asObservable();
    TotalAtualizado = this.totalSubject.asObservable();

    constructor(private itemCarrinho: HttpClient){
        this.itemCarrinho.get(URLCarrinho).subscribe((resp: Produtos)=>{
            this.carregado=true;
            this.info=resp['body'];
        })
    }

    // constructor(private itemCarrinho: HttpClient){
        
    // }

    salvarPedido(carrinho: Carrinho){
        return this.itemCarrinho.post(URLPedido, carrinho);
    }


    // get 

    // set Carrinho(valor: Carrinho){
    //     this.carrinho=valor;
    //     this.carrinhoSubject.next();
    // }

    // get Carrinho(){
    //     return this.carrinho;
    // }

    // get Total(){
    //     return this.total;
    // }

    // set Total(valor: number){
    //     this.total = valor;
    //     this.totalSubject.next();
    // }
}