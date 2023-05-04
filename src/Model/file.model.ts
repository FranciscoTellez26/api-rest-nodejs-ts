import { Schema, Types, model, Model } from "mongoose";
import { File } from "../Interfaces/file.interfaces";


//Defino el esquema que utilizará mongoose para guardar los datos
//LE digo que tome miinterface car para wue ayuede con la definicion
const FileSchema = new Schema<File>(
    {
      filename:{
        type:String
      },
      idUser:{
        type:String
      },
      path:{
        type:String
      }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const FileModel = model("Files", FileSchema);
export default FileModel;