export class Pedido{
   constructor(
    public idPedido?: number,
    public valorFrete?: number,
    public totalCompra?: number,
    public formaPgto?: string,
    public status?: string,
    public dataPedido?: string,
    public tbClienteIdCliente?: number,
    public tbEnderecoIdEndereco?: number,
){}
}