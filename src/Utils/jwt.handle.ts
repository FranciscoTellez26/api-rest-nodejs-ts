/* genera el token jwt para controlar la sesion del usuario */

import {sign, verify} from "jsonwebtoken"
const JWT_SECRET_KEY= process.env.JWT_SECRET_KEY || "";

export const generateToken = (id:string)=> {
    const jwt = sign({id}, JWT_SECRET_KEY,{
        expiresIn: "2h",
    });
    return jwt;
}

export const verifyToken = async () => {

}