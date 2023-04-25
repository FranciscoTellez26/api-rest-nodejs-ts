import ItemModel from "../Model/item.model"
import { Car } from "../Interfaces/car.interfaces"
/* Los servicios son los encargados de la logica de programacion en la apiiii, aqui es donde 
 */

export const insertCar = async (item: Car) => {
    const responseItem = await ItemModel.create(item);
    return responseItem;
}

export const getCars= async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
}

export const getCar= async (id:string) => {
    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
}

export const updateCar = async (id:string,  data: Car) => {
    const responseItem = await ItemModel.findOneAndUpdate(
        //id del car que se desea actualizar
        {_id: id},

        //datos del auto que quiero actualizar
        data,

        //Retorna los datos del car actualizados 
        {new: true,}
    );
    return responseItem;
};

export const deleteCar = async (id: string) => {
    const responseItem = await ItemModel.deleteOne({_id: id});
    return responseItem;
}