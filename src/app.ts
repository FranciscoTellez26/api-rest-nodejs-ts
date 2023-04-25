import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./Routes/";
import db from "./Config/mongo"

const PORT = process.env.PORT || 3002;  
const app = express();

//permite que los clientes u otro servicio puedan consultar esta api
app.use(cors());

//Permite que la api reciba datos
app.use(express.json());

//Permite a mi api conocer las uri´s que tengo 
app.use(router);


//Se levanta el servidor en el puerto que se eligio
app.listen(PORT, () => console.log("escuchando en el puerto", PORT)) 

//Conexion a la babse de datos
db().then(() => {
    console.log("ready")
})