export class ItensPedido{
    constructor(
        public idItensPedido: number,
        public idProduto: number,
        public qtdProduto?: number,
        public valorProduto?: number,
        public idPedido?: number
    ){ }
}