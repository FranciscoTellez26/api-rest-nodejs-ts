import { Request, Response } from "express"
import { registerNewUser } from "./auth.controller"
import { loginUser } from "./auth.controller"
export {registerNewUser, loginUser} from "../Services/auth.services"

export const registerCtrl = async ({body}: Request, res: Response) =>{
    const responseUser = await registerNewUser(body)
    res.send(responseUser)
}

export const loginrCtrl = async ({body}: Request, res: Response) =>{
    const {email, password} = body;
    const responseUser = await loginUser({email,password});
    res.send(responseUser)
}