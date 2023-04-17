
import{deletedContemplated} from "../data/deletedContemplated.js"
 const deleteContemplated = async (req, res) => {
    
    try {
        const id = req.params.id
        await deletedContemplated(id)


        res.status(200).send("usuario deletado")

    } catch (error) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
}
export default deleteContemplated