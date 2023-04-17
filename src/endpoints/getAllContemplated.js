import { listContemplated } from "../data/listContemplated.js"
const getAllContemplated = async (req, res) => {

    try {

        const result = await listContemplated()

        res.status(200).send({ message: "Lista com todos os contemplados", data: result })

    } catch (error) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
}
export default getAllContemplated