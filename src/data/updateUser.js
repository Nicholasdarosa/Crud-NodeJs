import { connection } from "../app.js"
export const updateUser = async (nome, email, password, date, id) => {

    try {
        return await connection("user").update({
            nome,
            email,
            password,
            created_at: date
    
    
        })
            .where("id", id)
    
    } catch (error) {
        return null
        
    }
    
};
