import { Router } from "express";
import { loginrCtrl, registerCtrl } from "../Controllers/auth.controller";

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginrCtrl);




export  {router};  