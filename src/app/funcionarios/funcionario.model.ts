export interface Funcionario {
    CODIGO_FUNCIONARIO: number,
    CARGO: string,
    DATA_ADMISSAO: string,
    DATA_DEMISSAO: string,
    PESSOA_CODIGO: number,
    PESSOA: {
        CODIGO: number,
        NOME: string,
        SOBRENOME: string,
        RG: string,
        CPF: string,
        SEXO: string,
        ESTADO_CIVIL: string,
        DATA_NASCIMENTO: string,
        RELIGIAO: string,
        ESCOLARIDADE: string
    },
    USUARIO: {
        CODIGO_FUNCIONARIO: number,
        EMAIL: string,
        LOGIN: string,
        SENHA: string
    },
    TELEFONE: {
        CODIGO: number,
        DDD: string,
        NUMERO: string
    }
}

export interface Pessoa {
    CODIGO: number,
    NOME: string,
    SOBRENOME: string,
    RG: string,
    CPF: string,
    SEXO: string,
    ESTADO_CIVIL: string,
    DATA_NASCIMENTO: string,
    RELIGIAO: string,
    ESCOLARIDADE: string
}

export interface Usuario {
    CODIGO_FUNCIONARIO: number,
    EMAIL: string,
    LOGIN: string,
    SENHA: string
}

export interface Telefone {
    CODIGO: number,
    DDD: string,
    NUMERO: string
}

export interface Telefone_Pessoa {
    PESSOA_CODIGO: number,
    TELEFONE_CODIGO: number
}