/* metodos para encriptar la contraseña del usuario */
import {hash, compare} from "bcryptjs"

export const encrypt = async (pass: string) =>{
    const passwordHash = await hash(pass, 10);
    return passwordHash;
}

export const verified = async (pass:string, passHash:string) =>{
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}