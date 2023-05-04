import { Request } from "express";
import multer, { diskStorage } from "multer";
import path from "path";
import fs from "fs";

const PATH_STORAGE = path.join(process.cwd(), "storage");

// Crear el directorio "storage" si no existe
if (!fs.existsSync(PATH_STORAGE)) {
  fs.mkdirSync(PATH_STORAGE);
}

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;
