import ItemModel from "../Model/item.model"
import { Car } from "../Interfaces/car.interfaces"
/* Los servicios son los encargados de la logica de programacion en la apiiii, aqui es donde 
 */

export const insertItem = async (item: Car) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
}