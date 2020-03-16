export class Pedido{
    constructor(
        public idPedido?: number,
        public valorFrete?: number,
        public totalCompra?: number,
        public idCliente?: number,
        public idEndereco?: number
    ){}
}