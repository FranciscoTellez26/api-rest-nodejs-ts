import { File } from "../Interfaces/file.interfaces"
import FileModel from "../Model/file.model"


/* Los servicios son los enFilegados de la logica de programacion en la apiiii, aqui es donde 
 */

export const registrarFile = async({filename, idUser,path}: File) =>{
    const responseFile = await FileModel.create({filename, idUser, path});
    return responseFile;
}