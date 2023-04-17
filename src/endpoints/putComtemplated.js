import {updateContemplated} from "../data/updateContemplated.js"

const putContemplated = async (req, res) => {

    try {
        const id = req.params.id
        const { nome, email, telefone, grupo, cota, cpf_cnpj, data_venda, datacontemplacao } = req.body
       if ( !id ||  !nome || !email || !telefone || !grupo || !cota || !cpf_cnpj || !data_venda || !datacontemplacao) {
          res.statusCode = 422
          throw new Error("preenchimento dos campos obrigatorios")
        }
        if (!email.includes("@") || !email.includes(".")) {
          res.statusCode = 400
          throw new Error("email invalido")
        }
    
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
    
    
        const result = await updateContemplated(user,id)
    
        res.status(200).send({ message: "informações editadas com sucesso", data: result });
      } catch (error) {
        res.status(res.statusCode).send(error.sqlMessage || error.message);
      }
};

export default putContemplated