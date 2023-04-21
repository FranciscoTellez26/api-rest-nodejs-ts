/* Este es un archivo de controlador, el cual, no realiza logica de programacion,
se encarga de manejar los datos, recibir y enviarlos hacia donde seran procesados despues */

import { Request, Response } from "express"
import { handleHttp } from "../Utils/error.handle"
import { insertItem } from "../Services/item.services"


export const getItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

export const getItems = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

export const updateItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}


export const postItem = async ({body}:Request, res:Response) => {
    try {
        const responseItem = await insertItem(body);
        res.send(responseItem);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
}

export const deleteItem = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}

