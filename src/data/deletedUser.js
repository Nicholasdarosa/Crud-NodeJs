import { connection } from "../app.js"
export const deletedUser = async (id) => {

    try {
        return await connection("user").where("id", id).del();

    } catch (error) {
        return null
    }

};
