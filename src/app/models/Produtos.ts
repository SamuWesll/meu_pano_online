export class Produtos {
    
    constructor(
        public idProduto: number,
        public tituloProduto: string,
        public descricao: string,
        public imagem: string,
        public valor: number,
        public valorDesconto: number,
        public categoria: number
    ){}
    
}