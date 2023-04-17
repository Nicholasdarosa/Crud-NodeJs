import { connection } from "../app.js"
export const listContemplated = async (id) => {

    try {
        return await connection("contemplados").select("*");

    } catch (error) {
        return null
    }

};
