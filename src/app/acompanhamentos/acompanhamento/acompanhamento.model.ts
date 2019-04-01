
export interface Acompanhamento { 
    CODIGO: number,
    DATA_ACOMPANHAMENTO: string,
    ATIVIDADE: string
    
}

export interface Acompanhamento_Funcionario{

    FUNCIONARIO_CODIGO: number,
    ACOMPANHAMENTO_CODIGO:number
}

export interface Acompanhamento_Residente{

    RESIDENTE_CODIGO: number,
    ACOMPANHAMENTO_CODIGO:number
}

export interface AcompanhamentoQuery {
    CODIGO: number,
    DATA_ACOMPANHAMENTO: string,
    ATIVIDADE: string,
    FUNCIONARIO_CODIGO: number,
    RESIDENTE_CODIGO: number
}