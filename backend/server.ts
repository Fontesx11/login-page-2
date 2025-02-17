import { router } from "./src/routes";
import express from "express";
import cors from "cors"

require("dotenv").config();

const { neon } = require("@neondatabase/serverless");

const app = express();

app.use(express.json())
app.use(cors())

app.use(router)

app.get('/', async (_, res) => {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const response = await sql`SELECT version()`;
  const { version } = response[0];
  res.json({ version });
});


app.listen(3003, () => {
  console.log(`Listening to https://login-page-2-mngg.onrender.com:${3003}`);
});
