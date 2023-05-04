import { Request, Response } from "express";
import dbConnect from "../Config/mongo";
import { RequestExt } from "../Interfaces/req-ext.interfaces";
import { Storage } from "../Interfaces/storage.interfaces";
import { registerUpload } from "../Services/storage.services";
import { handleHttp } from "../Utils/error.handle";

const getFile = async({ user,  file }: RequestExt, res: Response) => {
  try {
    const dataToRegister: Storage = {
      fileName: `${file?.originalname}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
      const response = await registerUpload(dataToRegister).then(resultado => {
        if(resultado){
          res.send(resultado)
        }else{
          res.send({Error: "No se guardo  el archivo"});
        }
      });
    

  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };