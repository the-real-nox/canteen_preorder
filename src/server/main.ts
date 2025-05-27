import { config } from "dotenv";
import express from "express";
import ViteExpress from "vite-express";
import apiRouter from "./api/index.js";

config();
const app = express();

app.use(express.json());

console.log(process.env.PORT);

const PORT = Number(process.env.PORT) || 3000;

app.use("/api", apiRouter);

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on ${PORT} port ...` ),
);