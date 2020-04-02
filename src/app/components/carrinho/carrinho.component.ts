import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { Subject, Subscription } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Response } from "../../response/Response";
import { ProdutoCarrinho } from 'src/app/models/ProdutoCarrinho';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit, OnDestroy, AfterContentChecked {

  converteDecimal(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  public produtoCarrinho = [];
  public valorTotal: number = 0;
  public clienteLogado: Response;
  public clienteSub: Subscription;

  constructor(public carrinhoService: CarrinhoService,
              public clienteService: ClienteService, 
              private router: Router) {
    this.clienteSub = this.clienteService.clienteLogado.subscribe(cliente =>
      this.clienteLogado = cliente);
  }

  private atualizarTermos = new Subject<ProdutoCarrinho>();
  sub: Subscription;

  static quantidadeMaiorQueZero(produtoCarrinho){
    if(produtoCarrinho.contador<1){
      produtoCarrinho.contador=1;
    }
  }

  ngOnInit() {
    this.carrinhoService.getCarrinho().subscribe(produtos => {
      this.produtoCarrinho = produtos;
    });

    this.clienteSub = this.atualizarTermos.pipe(
      debounceTime(300),
      switchMap((produtoCarrinho: ProdutoCarrinho) => this.carrinhoService.atualizar(produtoCarrinho))
    ).subscribe(prod => {
      if (prod) { throw new Error(); }
    },
      _ => console.log('Não atualizou'));
  }

  ngOnDestroy() {
    if (!this.clienteLogado) {
      this.carrinhoService.carrinhoStorage();
    }
    this.clienteSub.unsubscribe();
  }

  ngAfterContentChecked() {
    this.valorTotal = this.produtoCarrinho.reduce(
      (prev, cur) => prev + cur.contador * cur.valorDesconto, 0);
  }

  adicionar(produtoCarrinho) {
    produtoCarrinho.contador++;
    if (this.clienteLogado) { this.atualizarTermos.next(produtoCarrinho); }
  }

  subtrair(produtoCarrinho) {
    produtoCarrinho.contador--;
    if (this.clienteLogado) { this.atualizarTermos.next(produtoCarrinho); }
  }

  onChange(produtoCarrinho) {
    CarrinhoComponent.quantidadeMaiorQueZero(produtoCarrinho);
    if (this.clienteLogado){ 
      this.atualizarTermos.next(produtoCarrinho); 
    }
  }

  remover(produtoCarrinho: ProdutoCarrinho) {
    this.carrinhoService.remover(produtoCarrinho).subscribe(
      success => {
        this.produtoCarrinho = this.produtoCarrinho.filter(e => e.idProduto !== produtoCarrinho.idProduto);
        //console.log('Carrinho: ' + this.produtoCarrinho);
      },
      _ => console.log('Erro 400'));
  }

  checkout() {
    if (!this.clienteLogado) {
      //this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
      //como chamar o viewChild?
    } else {
      this.carrinhoService.checkout().subscribe(
        _ => {
          this.produtoCarrinho = [];
        },
        error1 => {
          console.log('Erro checkout');
        });
      this.router.navigate(['/']);
    }

  }
}
  // private calcularTotal(p: Carrinho[]): number {
  //   let soma = 0;
  //   p.forEach(valor => {
  //     soma += (valor.produto.valorDesconto * valor.quantidade);
  //   })
  //   return soma;
  // }

  // carregarTotal() {
  //   this.sub = this.carrinhoService.ItemAtualizado.subscribe(() => {
  //     this.valorTotal = this.calcularTotal(this.item.itemCarrinho);
  //   })
  // }

  // carregarCompra() {
  //   this.sub = this.carrinhoService.CarrinhoAtualizado.subscribe(() => {
  //     let carrinho = this.carrinhoService
  //   })
  // }

  // alterarQtde(valor, item){
  //   if(item.qtde){
  //     item.qtde++;
  //     this.valorTotal+=item.produtos.valorUnitario;
  //   }else{
  //     item.qtde--;
  //     this.valorTotal -= item.produtos.valorUnitario;
  //   }
  // }

  // removerCarrinho(item){
  //   this.valorTotal-=item.produtos.valorUnitario;
  //   this.carrinho = this.carrinho.filter(prod=>prod != item
  //   )
  // }
