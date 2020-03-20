export class Produtos {
    
    constructor(
        public idProduto?: number,
        public tituloProduto?: string,
        public descricao?: string,
        public valor?: number,
        public valorDesconto?: number,
        public imagem?: string,
        public Categoria?: number
    ){}
    
}