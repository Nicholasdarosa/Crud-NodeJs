import { connection } from "../app.js"
export const updateContemplated = async (user,id) => {

   try {
   return await connection("contemplados").update({
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
    .where("id",id)
   
    
   } catch (error) {
    return null
   }
};
