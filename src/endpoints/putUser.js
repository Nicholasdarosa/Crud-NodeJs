import { updateUser } from "../data/updateUser.js";

const putUser = async (req, res) => {

  try {

    const id = req.params.id

    const { nome, email, password } = req.body

    console.log(nome, email, password, id)

    if (!nome || !email || !password || !id) {
      res.statusCode = 422
      throw new Error("preenchimento dos campos obrigatorios")
    }

    if (!email.includes("@") || !email.includes(".")) {
      res.statusCode = 400
      throw new Error("email invalido")
    }
    const date = new Date()

    const result = await updateUser(nome, email, password, date, id)

    res.status(200).send({ message: "usuario alterado com sucesso", data: result });
  } catch (error) {
    res.status(res.statusCode).send(error.sqlMessage || error.message);
  }
};

export default putUser