import { Request, Response } from "express";
import {
  clientCreateService,
  clientListService,
} from "../services/clients.service";

export const clientCreateController = async (req: Request, res: Response) => {
  const client = await clientCreateService(req.body);

  return res.json(client);
};

export const clientListController = async (req: Request, res: Response) => {
  const clients = await clientListService();

  return res.json(clients);
};
