import express from "express";
import {connection} from "./src/db.js";

const app = express()
connection();

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})