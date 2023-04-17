import {selectValidate} from "../data/selectValidate.js"

const validate_cpf_cnpj = async (req, res) => {
   
   try {    
        const {cpf_cnpj} = req.body
       
     
       const result = await selectValidate(cpf_cnpj)
       console.log(result)
       if(!result.length) {

        res.statusCode = 400
      throw new Error("CPF ou CNPJ não Localizado")
       }

        res.status(200).send({message:"usuario localizado",data:result})

   } catch (error) {
       res.status(res.statusCode).send(error.sqlMessage || error.message);
   }
}
export default validate_cpf_cnpj

