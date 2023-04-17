import { connection } from "../app.js"
export const selectValidate = async (cpf_cnpj) => {

    try {
        return await connection("contemplados").select("*").where("cpf_cnpj", cpf_cnpj);
    } catch (error) {
        return "erro"
    }

};
