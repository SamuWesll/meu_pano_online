export class Produtos {
    
    constructor(
        public idProduto: number,
        public titulo: string,
        public descricao: string,
        public cor: string,        
        public valor: number,
        public valorDesconto: number,
        public codCategoria: number
    ){}
    
}