import { Storage } from "../Interfaces/storage.interfaces"
import StorageModel from "../Model/storage.model";

export const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

