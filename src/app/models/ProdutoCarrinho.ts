import { Produtos } from './Produtos';

export class ProdutoCarrinho{
    public idProduto?: number;
    public tituloProduto?: string;
    public descricao?: string;
    public valor?: number;
    public valorDesconto?: number;
    public imagem?: string;
    public categoria?: number;
    public contador?: number;

    constructor(produtos:Produtos, quantidade =1){
        this.idProduto= produtos.idProduto;
        this.tituloProduto= produtos.tituloProduto;
        this.descricao= produtos.descricao;
        this.valor= produtos.valor;
        this.valorDesconto= produtos.valorDesconto;
        this.imagem= produtos.imagem;
        this.categoria= produtos.categoria;
        this.contador=quantidade;
    }
}