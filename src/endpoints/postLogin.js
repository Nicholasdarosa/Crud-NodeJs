import { selectUserLogin } from "../data/selectUserLogin.js"
import jwt from 'jsonwebtoken';
const postLogin = async (req, res) => {
    try {
        const JWT_KEY = process.env.JWT_KEY
        const { email, password } = req.body

        if (!email || !password) {
            res.statusCode = 422
            throw new Error("preenchimento dos campos obrigatorios")
        }
        const emailValidation = (email) => {
            const validation = /\S+@\S+\.\S+/;
            return validation.test(email);
        };

        if (!emailValidation(email)) {
            res.statusCode = 400;
            throw new Error(`verifique se o email digitado esta correto: ${email}.`);
        }
        const login = await selectUserLogin(email, password)
        if (!login.length) {
            res.statusCode = 400;
            throw new Error("Usuario não encontrado");
        }

        const token = jwt.sign({ userId: login[0].id }, JWT_KEY, { expiresIn: 3600 })

        res.status(200).send({ message: "Usuário autenticado", auth: true, token });
    } catch (error) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
    }
}
export default postLogin