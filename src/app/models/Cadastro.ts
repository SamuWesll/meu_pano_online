import { Sexo } from './Sexo';

export class Cadastro {

    constructor(
        public email: string,
        public fullName: string,
        public numCPF: number,
        public birthDate: Date,
        public genre: Sexo,
        public telephone: number,
        public cell: number,
        public password: string,
    ){}

}