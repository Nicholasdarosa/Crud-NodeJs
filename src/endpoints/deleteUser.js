import { deletedUser } from "../data/deletedUser.js"
 const deleteUser = async (req, res) => {
    
    try {
        const id = req.params.id
        await deletedUser(id)


        res.status(200).send("usuario deletado")

    } catch (error) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
}
export default deleteUser