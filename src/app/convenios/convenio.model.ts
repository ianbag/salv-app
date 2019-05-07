export interface Convenio {
    CODIGO: number,
    NOME_CONVENIO: string,
    TIPO_CONVENIO: string,
       
            CODIGO: number,
            ENDERECO: string,
            NUMERO: number,
            BAIRRO: string,
            COMPLEMENTO: string,
            CIDADE: string,
            ESTADO: string,
            CEP: string,
            REFERENCIA: string
        
        // TELEFONE: {
        //     CODIGO: number,
        //     DDD: string,
        //     NUMERO: string
        // }
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
    REFERENCIA: string
}

export interface Endereco_Convenio {
    CONVENIO_CODIGO: number,
    ENDERECO_CODIGO: number
}

export interface Telefone {
    CODIGO: number,
    DDD: string,
    NUMERO: string
}

export interface Telefone_Convenio {
    CONVENIO_CODIGO: number,
    TELEFONE_CODIGO: number
}

export interface ConvenioQuery{
    COD_CONV: number,
    NOME_CONVENIO: string, 
    TIPO_CONVENIO: string,
    COD_END: number, 
    ENDERECO: string, 
    NUMERO: string,
    BAIRRO: string,
    COMPLEMENTO: string,
    CIDADE: string,
    ESTADO: string,
    CEP: string,
    REFERENCIA: string,
    COD_TEL: number,
    DDD: string, 
    NUM_TEL: string
}
