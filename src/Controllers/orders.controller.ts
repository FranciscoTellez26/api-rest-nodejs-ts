import { Request, Response } from "express"
import { handleHttp } from "../Utils/error.handle"
import { RequestExt } from "../Interfaces/req-ext.interfaces";


export const getItems = (req:RequestExt, res:Response) => {
    try {
        res.send({
            data:"Esto solo lo ven las personas con session activa",
            user: req.user,
        })
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BlogS')
    }
}

