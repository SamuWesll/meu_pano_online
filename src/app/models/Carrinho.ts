import { ProdutoCarrinho } from './ProdutoCarrinho';

export class Carrinho {
    constructor(
        public idCarrinho?: number,
        public produto?: ProdutoCarrinho
        ){}
}