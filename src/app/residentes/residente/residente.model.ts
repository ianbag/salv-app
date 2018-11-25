export interface Residente {
    nome: string,
    sobrenome: string,
    rg: string,
    cpf: string,
    sexo: string,
    estado_civil: string
    data_nascimento: string
    religiao: string,
    escolaridade: string,

    apelido: string,
    profissao: string,

    titulo_eleitor: string,
    zona_eleitoral: string,
    secao_eleitoral: string,

    numero_certidao_nascimento: string,
    folha_certidao_nascimento: string,
    livro_certidao_nascimento: string,
    cidade_certidao_nascimento: string,
    estado_certidao_nascimento: string,

    cartao_sams: string,
    cartao_sus: string,

    numero_inss: string,
    banco_inss: string,
    agencia_inss: string,
    conta_inss: string,
    valor_inss: number,
    situacao_inss: string,
    prova_vida_inss: string,

    data_acolhimento: string,
    data_desacolhimento: string,
    motivo_desacolhimento: string
}