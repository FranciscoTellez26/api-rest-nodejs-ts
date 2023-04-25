/* los middlewares son funciones que se ejecutan (en las rutas) en medio del controlador 
y de los servicios que se solicitan a la api, en este caso podria funcionar para 
un inicio de sesión y controlar por ejemplo los token. basicamente se encarga de responder
al usuario si algo anda mal o cualquier otro mensaje*/

import { NextFunction, Request, Response } from "express";

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hola soy el log");
    next();
}