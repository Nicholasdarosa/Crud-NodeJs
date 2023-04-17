import { app } from "./app.js";
import connectionTest from "./endpoints/connectionTest.js";
import postUser from "./endpoints/postUser.js";
import putUser from "./endpoints/putUser.js";
import deleteUser from "./endpoints/deleteUser.js"
import getAllUser from "./endpoints/getAllUser.js";
import getAllContemplated from "./endpoints/getAllContemplated.js";
import postContemplated from "./endpoints/postContemplated.js";
import putContemplated from "./endpoints/putComtemplated.js";
import deleteContemplated from "./endpoints/deleteContemplated.js";
import postLogin from "./endpoints/postLogin.js";
import validate_cpf_cnpj from "./endpoints/validate_cpf_cnpj.js";


app.get("/connectionTest", connectionTest)
app.get("/user",getAllUser)
app.get("/contemplados",getAllContemplated)

app.post("/user", postUser)
app.post("/contemplados/validate",validate_cpf_cnpj)
app.post("/contemplados", postContemplated)
app.post("/user/login",postLogin)

app.put("/user/:id", putUser)
app.put("/contemplados/:id", putContemplated)

app.delete("/user/:id",deleteUser)
app.delete("/contemplados/:id",deleteContemplated)

