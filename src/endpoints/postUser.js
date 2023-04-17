import { createUser } from "../data/createUser.js";

const postUser = async (req, res) => {
  try {
    const { nome, email, password } = req.body
    
    if (!nome || !email || !password) {
      res.statusCode = 422
      throw new Error("preenchimento dos campos obrigatorios")
    }
    if (!email.includes("@") || !email.includes(".")) {
      res.statusCode = 400
      throw new Error("email invalido")
    }
    const date = new Date()

    const result = await createUser(nome, email, password, date)

    res.status(201).send({ message: "usuario criado com sucesso", data: result });
  } catch (error) {
    res.status(res.statusCode).send(error.sqlMessage || error.message);
  }
};

export default postUser
