import { connection } from "../app.js"
export const createContemplated = async (user) => {

    const result = await connection("contemplados").insert({
        nome:user.nome,
        email:user.email,   
        telefone:user.telefone,
        grupo:user.grupo,
        cota:user.cota,
        cpf_cnpj:user.cpf_cnpj,
        data_venda:user.data_venda,
        datacontemplacao:user.datacontemplacao, 
        created_at:user.created_at,

    })
  
    return result
};
