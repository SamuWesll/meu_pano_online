export class Produtos {
    
    constructor(
        public id_produto?: number,
        public titulo?: string,
        public descricao?: string,
        public cor?: string,        
        public valor?: number,
        public valorDesconto?: number,
        public codCategoria?: number
    ){}
    
}