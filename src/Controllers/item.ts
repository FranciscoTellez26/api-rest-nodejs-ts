/* Este es un archivo de controlador, el cual, no realiza logica de programacion,
se encarga de manejar los datos, recibir y enviarlos hacia donde seran procesados despues */

import { Request, Response } from "express"
import { handleHttp } from "../Utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../Services/item.services"


export const getItem = async({params}:Request, res:Response) => {
    try {
        const {id} = params
        const response = await getCar(id);

        //Si response existe, se retorna response, si no, muestra el mensaje NOT_FOUND
        const data = response ? response : "NOT_FOUND";
        res.send(data)
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

export const getItems = async (req:Request, res:Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

export const updateItem = async ({params, body}:Request, res:Response) => {
    try {
        const {id} = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}


export const postItem = async ({body}:Request, res:Response) => {
    
    try {
        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
}

export const deleteItem = async ({params}:Request, res:Response) => {
    try {
        const {id} = params;
        const responseItem = await deleteCar(id)
        res.send(responseItem);
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

