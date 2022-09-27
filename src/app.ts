import express from "express";
import clientRouter from "./routes/client.route";
import "reflect-metadata";

const app = express();

app.use(express.json());

app.use("/clients", clientRouter);

app.listen(3000, () => {
  console.log("Server running");
});
