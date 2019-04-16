export interface Familiar{
    CODIGO: number,
    NOME: string,
    SOBRENOME: string,
    PARENTESCO: string,
    ENDERECOS: {
        CODIGO: number,
        ENDERECO: string,
        NUMERO: number,
        BAIRRO: string,
        COMPLEMENTO: string,
        CIDADE: string,
        ESTADO: string,
        CEP: string,
        REFERENCIA: string,
    }
    TELEFONE: {
        CODIGO: number,
        DDD: number,
        NUMERO: number
    }
}

export interface Endereco {
    CODIGO: number,
    ENDERECO: string,
    NUMERO: number,
    BAIRRO: string,
    COMPLEMENTO: string,
    CIDADE: string,
    ESTADO: string,
    CEP: string,
    REFERENCIA: string,
}
export interface Telefone {
    CODIGO: number,
    DDD: number,
    NUMERO: number
}