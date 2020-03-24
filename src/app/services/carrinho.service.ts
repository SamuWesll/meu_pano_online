import { Injectable } from "@angular/core";

import {CookieService} from 'ngx-cookie-service';
import { Produtos } from '../models/Produtos';
import { HttpClient } from '@angular/common/http';
import { Carrinho } from '../models/Carrinho';
import { ItemCarrinho } from '../models/ItemCarrinho';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

//udar url 
const URLCarrinho: string = "http://localhost:8080/meupanoonline/carrinho"

@Injectable({
    providedIn: 'root'
})

export class CarrinhoService{

    localMap={};

    
    private itemSubject: BehaviorSubject<ItemCarrinho[]>;
    private totalSubject: BehaviorSubject<number>;
    private item: Observable<ItemCarrinho[]>;
    private total: Observable<number>;

    private clienteLogado: Response;

    // constructor(private carrinhoService: HttpClient, private cookieService: CookieService, private clienteService: ClienteService){ })
    // }

    constructor(private carrinhoService: HttpClient){
        this.itemSubject = new BehaviorSubject<ItemCarrinho>(null);
        this.item = this.itemSubject.asObservable();
        this.totalSubject = new BehaviorSubject<number>(null);
        this.total = this.totalSubject.asObservable();
        //this.clienteService.clienteLogado.subscribe(cliente => this.clienteLogado = cliente); 
    }

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