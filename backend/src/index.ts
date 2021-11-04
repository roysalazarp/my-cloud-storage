import "reflect-metadata";
import express from 'express';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({
  path: `${__dirname}/../.env.${process.env.NODE_ENV}`
})

const port: number = +process.env.PORT;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT,
    credentials: true
  })
);

app.get("/", (_, res) => {
  return res.send({data: "data from the backend"})
})

app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server Started at PORT: ${port}`);
});
