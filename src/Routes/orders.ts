import { Router } from "express";
import { getItems } from "../Controllers/orders.controller";
import { checkJwt } from "../Middlewares/sesion.middleware";

/* a esta ruta solo pueden acceder las personas que tienen session activa
que tengan un jwt valido */
const router = Router();

router.get("/",checkJwt,getItems)

export {router};