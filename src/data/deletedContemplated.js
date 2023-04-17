import { connection } from "../app.js"
export const deletedContemplated = async (id) => {

    try {
        return await connection("contemplados").where("id", id).del();

    } catch (error) {
        return null
    }

};
