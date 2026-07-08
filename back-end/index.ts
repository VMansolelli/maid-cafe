import express from "express";
import { connection } from "./src/db.js";
import { prisma } from "./src/db.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
connection();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {email: email, password: password},

  });

  res.json(user);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
