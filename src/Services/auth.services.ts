import UserModel from "../Model/user.model"
import { User } from "../Interfaces/user.interfaces";
import { encrypt, verified } from "../Utils/bcrypt.handle";
import { Auth } from "../Interfaces/auth.interfaces";
import { generateToken } from "../Utils/jwt.handle";

export const registerNewUser = async ({email, password, name}: User) =>{
    //Busco si existe un registro del email en la base de datos
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "ALREADY_USER"

    const passHash = await encrypt(password)
    const registerNewUser = UserModel.create({email,password:passHash,name})
    return registerNewUser;
}

export const loginUser = async ({email, password}: Auth) =>{
    //Busco si existe un registro del email en la base de datos
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "INVALID_DATA";

    const passwordHash = checkIs.password //TODO el encriptado
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return "INVALID_DATA";

    const token = generateToken(checkIs.email);

    const data = {
        token, user: checkIs
    };

    return data;
}