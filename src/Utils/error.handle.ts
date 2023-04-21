/* Este archivo se encarga de manejar los errores que se puedan presentar en
las peticiones a la api */

import { Response } from "express";

export const handleHttp = (res: Response,error: string, errorRaw?:any)=>{
    console.log(errorRaw);
    res.status(500).send({error})
}