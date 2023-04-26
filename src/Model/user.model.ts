import { Schema, Types, model, Model } from "mongoose";
import { User } from "../Interfaces/user.interfaces";

//Defino el esquema que utilizará mongoose para guardar los datos
//LE digo que tome miinterface car para wue ayuede con la definicion
const UserSchema = new Schema<User>(
    {
       name: {
        required: true,
        type: String,
       },
       password: {
        required: true,
        type: String,
       },
       email: {
        required: true,
        type: String,
        unique: true,
       },
       description: {
        type: String,
        // si no tiene una descripcion agrega este valor por defecto
        default: "Mensaje default por que no agregaron descripción :C"
       },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("user", UserSchema);
export default UserModel;