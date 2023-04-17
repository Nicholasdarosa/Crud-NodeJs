
import {listUser} from "../data/listUser.js"
 const getAllUser = async (req, res) => {
    
    try {
      
        const result = await listUser()

        res.status(200).send({message:"Lista com todos os Usuarios",data:result})

    } catch (error) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
}
export default getAllUser