import { connection } from "../app.js"
export const listUser = async (id) => {

    try {
        return await connection("user").select("*");

    } catch (error) {
      return null
    }

};
