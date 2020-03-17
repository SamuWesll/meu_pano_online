import { Sexo } from './Sexo';

export class Cliente {

    constructor(
        public idCliente: number,
        public nome: string,
        public cpf: string,
        public email: string,
        public senha: string,
        public dataNascimento: string,
        public genero: Sexo,
    ){}

}