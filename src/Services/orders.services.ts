import ItemModel from "../Model/item.model"
import { Car } from "../Interfaces/car.interfaces"
/* Los servicios son los encargados de la logica de programacion en la apiiii, aqui es donde 
 */

export const getOrders= async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
}