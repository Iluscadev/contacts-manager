import AppDataSource from "../data-source";
import { Client } from "../entities/client.entity";
import { ICreateClient } from "../interfaces";

export const clientCreateService = async ({name, email, phone}: ICreateClient) => {
  const clientRepository = AppDataSource.getRepository(Client)

  const client = {
    name,
    email,
    phone,
  }

  await clientRepository.save(client)

  return client
};
