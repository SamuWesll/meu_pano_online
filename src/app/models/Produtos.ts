export class Produtos {
    
    constructor(
        public cod: number,
        public name: string,
        public fabricante: string,
        public descricao: string,
        public codCategoria: number,
        public cor: string,
        public valorBruto: number,
        public valorUnitario: number,
        public idFornecedor: number,
        public estoqueDisponivel: number,
        public urlImagem: string,
    ){}
    
}