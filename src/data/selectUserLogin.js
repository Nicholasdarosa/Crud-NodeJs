import { connection } from "../app.js"
export const selectUserLogin = async (email, password) => {

    try {
        return await connection("user").select("*").where("email", email).andWhere("password", password);
    } catch (error) {
        return null
    }

};
