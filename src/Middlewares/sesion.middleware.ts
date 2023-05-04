import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../Utils/jwt.handle";
import { RequestExt } from "../Interfaces/req-ext.interfaces";




export const  checkJwt = (req:RequestExt, res:Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(' ').pop();
        const isUser = verifyToken(`${jwt}`) as {id:string};
        console.log(isUser);

        if(!isUser){
            res.status(400).send("INVALID_SESSION")
        }else{
            req.user = isUser;
            console.log(jwtByUser);
            next();
        }
        
        next();
    } catch (error) {
        res.status(400).send("SESSION_NO_VALIDA");
    }
}