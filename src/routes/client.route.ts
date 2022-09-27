import Router from "express";
import { clientCreateController } from "../controllers/clients.controller";

const clientRouter = Router();

clientRouter.post("", clientCreateController);

export default clientRouter;
