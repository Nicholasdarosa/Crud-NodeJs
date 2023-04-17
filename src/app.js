import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";

export const app = express();

app.use(express.json())
app.use(cors())

dotenv.config();

const host = process.env.DB_HOST

export const connection = knex({
  client: "mysql",
  connection: {
    host: host,
    port: 3306,
    user: process.env.DB_USER,
    database: process.env.DB_NAME
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address();
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



