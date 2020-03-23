import { Produtos } from './Produtos';

export class Carrinho {
    constructor(public produto: Produtos, public quantidade: number){}
}