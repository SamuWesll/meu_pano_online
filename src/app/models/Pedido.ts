export class Pedido{
   constructor(
    public idPedido?: number,
    public valor_Frete?: number,
    public total_compra?: number,
    public id_cliente?: number,
    public id_endereco?: number,
    public dt_pedido?: string,
    public forma_pgto?: string
){}
}