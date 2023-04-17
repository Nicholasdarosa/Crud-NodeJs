
import {createContemplated} from "../data/createContemplated.js"
const postContemplated = async (req, res) => {
  try {
    const { nome, email, telefone, grupo, cota, cpf_cnpj, data_venda, datacontemplacao } = req.body
   if (!nome || !email || !telefone || !grupo || !cota || !cpf_cnpj || !data_venda || !datacontemplacao) {
      res.statusCode = 422
      throw new Error("preenchimento dos campos obrigatorios")
    }
    if (!email.includes("@") || !email.includes(".")) {
      res.statusCode = 400
      throw new Error("email invalido")
    }
    // const validatedCpf_cnpj = new RegExp(("[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}")) 
    // if
    //   (validatedCpf_cnpj.test(cpf_cnpj)) {
    //   res.statusCode = 400
    //   throw new Error("cpf ou cnpj invalido")
    // }
    const dateSale = data_venda.split("/")
    const formatDateSale = (`${dateSale[2]}/${dateSale[1]}/${dateSale[0]}`)

    const dateContemplated = datacontemplacao.split("/")
    const formatDateContemplated = (`${dateContemplated[2]}/${dateContemplated[1]}/${dateContemplated[0]}`)

    const date = new Date()
    const user = {
      nome,
      email,
      telefone,
      grupo,
      cota,
      cpf_cnpj,
      data_venda: formatDateSale,
      datacontemplacao: formatDateContemplated,
      created_at: date
    }


    const result = await createContemplated(user)

    res.status(201).send({ message: "usuario criado com sucesso", data: result });
  } catch (error) {
    res.status(res.statusCode).send(error.sqlMessage || error.message);
  }
};

export default postContemplated
