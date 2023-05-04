import { Router } from "express";
import { getFile } from "../Controllers/file.controller";
import { checkJwt } from "../Middlewares/sesion.middleware";
import multerMiddleware from "../Middlewares/file.middleware";
const router = Router();

router.post("/",checkJwt,multerMiddleware.single('myfile'), getFile);

export {router};