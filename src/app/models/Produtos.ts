import { ProdutoCarrinho } from "./ProdutoCarrinho";
export class Produtos {
    public idProduto?: number;
    public tituloProduto?: string;
    public descricao?: string;
    public valor?: number;
    public valorDesconto?: number;
    public imagem?: string;
    public categoria?: number;


    constructor(produtoCarrinho?: ProdutoCarrinho) {
        if (produtoCarrinho) {
            this.idProduto = produtoCarrinho.idProduto;
            this.tituloProduto = produtoCarrinho.tituloProduto;
            this.descricao = produtoCarrinho.descricao;
            this.valor = produtoCarrinho.valor;
            this.imagem = produtoCarrinho.imagem;
            this.valorDesconto = produtoCarrinho.valorDesconto;
            this.categoria = produtoCarrinho.categoria;
        } else {
            this.idProduto = 0;
            this.tituloProduto = "";
            this.descricao = "";
            this.valor = 0;
            this.imagem = "";
            this.valorDesconto = 0;
            this.categoria = 0;
        }
    }
}