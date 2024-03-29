import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../Controllers/item";
import { logMiddleware } from "../Middlewares/log.middleware";

const router = Router();

router.get("/", getItems);

router.get("/:id", logMiddleware, getItem);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);



export  {router};  