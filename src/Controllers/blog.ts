import { Request, Response } from "express"
import { handleHttp } from "../Utils/error.handle"


export const getBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_Blog')
    }
}

export const getBlogs = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_GET_BlogS')
    }
}

export const updateBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_Blog')
    }
}


export const postBlog = ({body}:Request, res:Response) => {
    try {
        res.send(body);
        console.log(body)
    } catch (error) {
        handleHttp(res, 'ERROR_POST_Blog')
    }
}

export const deleteBlog = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_Blog')
    }
}