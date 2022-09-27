import Router from "express";
import {
  clientCreateController,
  clientListController,
} from "../controllers/clients.controller";

const clientRouter = Router();

clientRouter.post("", clientCreateController);
clientRouter.get("", clientListController);

export default clientRouter;
