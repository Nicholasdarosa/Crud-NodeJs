import { connection } from "../app.js"
export const createUser = async (nome, email, password, date) => {

    const result = await connection("user").insert({
        nome,
        email,
        password,
        created_at: date


    })
    return result
};
