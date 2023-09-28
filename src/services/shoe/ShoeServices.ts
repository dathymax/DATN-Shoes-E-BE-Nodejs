import IShoe from "../../models/shoe/IShoe";
import IShoeServices from "./IShoeServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { ShoeModel } from "../../models/shoe/ShoeModel";

export default class ShoeServices implements IShoeServices<IShoe> {
    getShoes = async (): Promise<IResponseEntity<IShoe>> => {
        try {
            const shoes = await ShoeModel.find();

            return {
                data: shoes,
                status: 200,
                message: "Get shoes success!",
            }
        } catch (error) {
            console.log(error)
            return {
                data: null,
                status: 400,
                message: "Get shoes failed!",
            }
        }
    }

    getShoeById = async (shoeId: string): Promise<IResponseEntity<IShoe>> => {
        try {
            const shoe = await ShoeModel.findById(shoeId);

            return {
                data: shoe,
                status: 200,
                message: "Get shoe success!",
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get shoe failed!",
            }
        }
    }

    getShoeByType = async (shoeType: string): Promise<IResponseEntity<IShoe>> => {
        try {
            const shoe = await ShoeModel.findOne({ shoeType });

            return {
                data: shoe,
                status: 400,
                message: "Get shoe failed!",
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get shoe failed!",
            }
        }
    }

    createShoe = async (values: Record<string, any>): Promise<IResponseEntity<IShoe>> => {
        try {
            const shoe = new ShoeModel(values);

            await shoe.save();

            return {
                data: shoe,
                status: 200,
                message: "Create shoe success!",
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create shoe failed!",
            }
        }
    }

    updateShoeById = async (shoeId: string, values: Record<string, any>): Promise<IResponseEntity<IShoe>> => {
        try {
            const shoe = await ShoeModel.findByIdAndUpdate(shoeId, values, { new: true });

            return {
                data: shoe,
                status: 200,
                message: "Update shoe success!",
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update shoe failed!",
            }
        }
    }

    deleteShoeById = async (shoeId: string): Promise<IResponseEntity<IShoe>> => {
        try {
            const shoe = await ShoeModel.findByIdAndDelete({ _id: shoeId });

            return {
                data: shoe,
                status: 200,
                message: "Delete shoe success!",
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete shoe failed!",
            }
        }
    }
}