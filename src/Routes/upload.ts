import { Router } from "express";
import { getFile } from "../Controllers/upload.controller";
import multerMiddleware from "../Middlewares/file.middleware";
import { checkJwt } from "../Middlewares/sesion.middleware";

const router = Router();

router.post("/", checkJwt, multerMiddleware.single("myfile"), getFile);

export { router };