/* Este archivo se encarga de poner el nombrea las rutas 
dependienedo el nombre del archivo que usa  */

import { Router } from "express";
import {readdirSync} from "fs";

//variable que me devuelve la ruta del directoria actual
const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName =(fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}



//Funcion para leer los archivos que existen en este directorio
readdirSync(PATH_ROUTER).filter((fileName)=> {
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando la ruta...../${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})


export {router};