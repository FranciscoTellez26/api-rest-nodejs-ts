import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../Interfaces/car.interfaces";

//Defino el esquema que utilizará mongoose para guardar los datos
//LE digo que tome miinterface car para wue ayuede con la definicion
const ItemSchema = new Schema<Car>(
    {
        name:{
            type: String,
            required: true,
        },

        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            //indico los valores que pueden ser permitidos aqui
            enum: ["gasoline", "electric"],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type:String,
            required: true,
        },
        price: {
            type:Number,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;