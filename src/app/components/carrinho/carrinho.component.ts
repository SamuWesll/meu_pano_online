import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { Produtos } from 'src/app/models/Produtos';
import { Carrinho } from "src/app/models/Carrinho";
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ItemCarrinho } from 'src/app/models/ItemCarrinho';
import { Subscription } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { Response } from "../../response/Response";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit, OnDestroy, AfterContentChecked {

  convertDecimal(valor: string): string{
    return parseFloat(valor).toFixed(2).replace('.', ',');
  }
  
  public produtos: Produtos[] = [];
  public valorTotal: number = 0;
  public clienteLogado: Response;
  public clienteSub: Subscription;

  constructor(public carrinhoService: CarrinhoService, public clienteService: ClienteService, private router: Router) { 
    this.clienteSub=this.clienteService.clienteLogado.subscribe(cliente =>
      this.clienteLogado = cliente);
  }
 
  // private updateTerms = new Subject<ProductInOrder>();
  // sub: Subscription;
  
  // static validateCount(productInOrder) {
  //   const max = productInOrder.productStock;
  //   if (productInOrder.count > max) {
  //   productInOrder.count = max;
  //   } else if (productInOrder.count < 1) {
  //   productInOrder.count = 1;
  //   }
  //   console.log(productInOrder.count);
  //   }
    
    ngOnInit() {
    this.carrinhoService.getCarrinho().subscribe(produtos => {
    this.produtos = produtos;
    });

    // this.sub = this.updateTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //   //
    //   // ignore new term if same as previous term
    //   // Same Object Reference, not working here
    //   //  distinctUntilChanged((p: ProductInOrder, q: ProductInOrder) => p.count === q.count),
    //   //
    //   // switch to new search observable each time the term changes
    //   switchMap((productInOrder: ProductInOrder) => this.cartService.update(productInOrder))
    //   ).subscribe(prod => {
    //     if (prod) { throw new Error(); }
    //   },
    //   _ => console.log('Update Item Failed'));
    //   }
      
      ngOnDestroy() {
      if (!this.clienteLogado) {
      this.carrinhoService.carrinhoStorage();
      }
      this.clienteSub.unsubscribe();
      }
      
      ngAfterContentChecked() {
      this.total = this.productInOrders.reduce(
      (prev, cur) => prev + cur.count * cur.productPrice, 0);
      }
      

  private calcularTotal(p: Carrinho[]): number{
    let soma=0;
    p.forEach(valor =>{
      soma+=(valor.produto.valorDesconto*valor.quantidade);
    })
    return soma; 
  }

  carregarTotal(){
    this.sub=this.carrinhoService.ItemAtualizado.subscribe(()=>{
      this.valorTotal=this.calcularTotal(this.item.itemCarrinho);
    })
  }

  carregarCompra(){
    this.sub = this.carrinhoService.CarrinhoAtualizado.subscribe(()=>{
      let carrinho = this.carrinhoService
    })
  }

  checkout(){
    if(!this)
  }
//=================================================================


addOne(productInOrder) {
productInOrder.count++;
CartComponent.validateCount(productInOrder);
if (this.currentUser) { this.updateTerms.next(productInOrder); }
}

minusOne(productInOrder) {
productInOrder.count--;
CartComponent.validateCount(productInOrder);
if (this.currentUser) { this.updateTerms.next(productInOrder); }
}

onChange(productInOrder) {
CartComponent.validateCount(productInOrder);
if (this.currentUser) { this.updateTerms.next(productInOrder); }
}


remove(productInOrder: ProductInOrder) {
this.cartService.remove(productInOrder).subscribe(
success => {
 this.productInOrders = this.productInOrders.filter(e => e.productId !== productInOrder.productId);
  console.log('Cart: ' + this.productInOrders);
},
_ => console.log('Remove Cart Failed'));
}

checkout() {
if (!this.currentUser) {
this.router.navigate(['/login'], {queryParams: {returnUrl: this.router.url}});
} else if (this.currentUser.role !== Role.Customer) {
this.router.navigate(['/seller']);
} else {
this.cartService.checkout().subscribe(
  _ => {
      this.productInOrders = [];
  },
  error1 => {
      console.log('Checkout Cart Failed');
  });
this.router.navigate(['/']);
}

}



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
}