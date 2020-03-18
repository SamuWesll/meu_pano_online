import { Produtos } from "./Produtos";
export class Carrinho {
    constructor(public produtos?: Produtos, public qtde?: number){}
}