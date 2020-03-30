import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ClienteService} from './cliente.service';
import {Carrinho} from '../models/Carrinho';
import {ItemCarrinho} from '../models/ItemCarrinho';
import {Response} from '../response/Response';
import {ProdutoCarrinho} from '../models/ProdutoCarrinho';

const URLCarrinho: string = "http://localhost:8080/meupanoonline/carrinho";
const URLAdicionar: string = "http://localhost:8080/meupanoonline/carrinho/adicionar";
const URLAtualizar: string = "http://localhost:8080/meupanoonline/carrinho/`${produtoCarrinho.idProduto}`";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {

    localMap = {};


    private itemSubject: BehaviorSubject<ItemCarrinho[]>;
    private totalSubject: BehaviorSubject<number>;
    public item: Observable<ItemCarrinho[]>;
    public total: Observable<number>;


    private clienteLogado: Response;

    constructor(private carrinhoService: HttpClient,
                private cookieService: CookieService,
                private clienteService: ClienteService) {
        this.itemSubject = new BehaviorSubject<ItemCarrinho[]>(null);
        this.item = this.itemSubject.asObservable();
        this.totalSubject = new BehaviorSubject<number>(null);
        this.total = this.totalSubject.asObservable();
        this.clienteService.clienteLogado.subscribe(user => this.clienteLogado = user);


    }

    private getCarrinhoLocal(): ProdutoCarrinho[] {
        if (this.cookieService.check('carrinho')) {
            this.localMap = JSON.parse(this.cookieService.get('carrinho'));
            return Object.values(this.localMap);
        } else {
            this.localMap = {};
            return [];
        }
    }

    getCarrinho(): Observable<ProdutoCarrinho[]> {
        const carrinhoLocal = this.getCarrinhoLocal();
        if (this.clienteLogado) {
            if (carrinhoLocal.length > 0) {
                return this.carrinhoService.post<Carrinho>(URLCarrinho, carrinhoLocal).pipe(
                    tap(_ => {
                        this.limparCarrinhoStorage();
                    }),
                    map(carrinho => carrinho.produtoCarrinho),
                    catchError(_ => of([]))
                );
            } else {
                return this.carrinhoService.get<Carrinho>(URLCarrinho).pipe(
                    map(carrinho => carrinho.produtoCarrinho),
                    catchError(_ => of([]))
                );
            }
        } else {
            return of(carrinhoLocal);
        }
    }

    adicionarItem(produtoCarrinho): Observable<boolean> {
        if (!this.clienteLogado) {
            if (this.cookieService.check('carrinho')) {
                this.localMap = JSON.parse(this.cookieService.get('carrinho'));
            }
            if (!this.localMap[produtoCarrinho.idProduto]) {
                this.localMap[produtoCarrinho.idProduto] = produtoCarrinho;
            } else {
                this.localMap[produtoCarrinho.idProduto].count += produtoCarrinho.count;
            }
            this.cookieService.set('carrinho', JSON.stringify(this.localMap));
            return of(true);
        } else {
            
            return this.carrinhoService.post<boolean>(URLAdicionar, {
                'quantidade': produtoCarrinho.contador,
                'idProduto': produtoCarrinho.idProduto
            });
        }
    }

    atualizar(produtoCarrinho): Observable<ProdutoCarrinho> {
        if (this.clienteLogado) {       
            return this.carrinhoService.put<ProdutoCarrinho>(URLAtualizar, produtoCarrinho.contador);
        }
    }


    remover(produtoCarrinho) {
        if (!this.clienteLogado) {
            delete this.localMap[produtoCarrinho.idProduto];
            return of(null);
        } else {
            const url = `${URLCarrinho}/${produtoCarrinho.idProduto}`;
            return this.carrinhoService.delete(url).pipe( );
        }
    }


    checkout(): Observable<any> {
        const url = `${URLCarrinho}/checkout`;
        return this.carrinhoService.post(url, null).pipe();
    }

    carrinhoStorage() {
        this.cookieService.set('carrinho', JSON.stringify(this.localMap));
    }

    limparCarrinhoStorage() {
        console.log('cheguei aqui');
        this.cookieService.delete('carrinho');
        this.localMap = {};
    }

}