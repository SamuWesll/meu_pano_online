import { Produtos } from './Produtos'


export class ItemCarrinho{
    constructor(
    public produto?: Produtos,
    public quantidade?: number
    ){}
}