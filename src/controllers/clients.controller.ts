import { Request, Response } from "express";
import { clientCreateService } from "../services/clients.service";

export const clientCreateController = async (req: Request, res: Response) => {
  const client = await clientCreateService(req.body);

  return res.json(client);
};
