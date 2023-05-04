import { Request, Response } from "express"
import dbConnect from "../Config/mongo";
import { handleHttp } from "../Utils/error.handle"
import { registrarFile } from "../Services/file.services";
import { RequestExt } from "../Interfaces/req-ext.interfaces";
import { File } from "../Interfaces/file.interfaces";


export const getFile = async (req:RequestExt, res:Response) => {
    try {

        const {user, file} = req;
        
        const dataToRegister:File  = {
            filename:`${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        }

        console.log(dataToRegister)
        /* const response = await registrarFile(dataToRegister);
        res.send(response); */
    } catch (error) {
        handleHttp(res, 'ERROR_GET_File')
    }
}