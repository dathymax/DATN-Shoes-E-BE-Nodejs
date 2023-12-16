import { IResponseEntity } from "../../common/IResponseEntity";
import { ColorModel } from "../../models/color/ColorModel";
import IColor from "../../models/color/IColor";
import IColorServices from "./IColorServices";

class ColorServices implements IColorServices<IColor> {
    getAll = async (): Promise<IResponseEntity<IColor>> => {
        try {
            const colors = await ColorModel.find();

            return {
                data: colors,
                status: 200,
                message: "Get all color success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all color failed!",
            };
        }
    };

    getById = async (id: string): Promise<IResponseEntity<IColor>> => {
        try {
            const color = await ColorModel.findById(id);

            if (!color) {
                return {
                    data: null,
                    status: 400,
                    message: "Get color by id failed!",
                };
            }

            return {
                data: color,
                status: 200,
                message: "Get color by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get color by id failed!",
            };
        }
    };

    create = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<IColor>> => {
        try {
            const color = new ColorModel(values);

            await color.save();

            return {
                data: color,
                status: 200,
                message: "Create color success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create color failed!",
            };
        }
    };

    update = async (
        id: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<IColor>> => {
        try {
            const color = await ColorModel.findByIdAndUpdate(id, values, {
                new: true,
            });

            return {
                data: color,
                status: 200,
                message: "Update color success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update color failed!",
            };
        }
    };

    delete = async (id: string): Promise<IResponseEntity<IColor>> => {
        try {
            await ColorModel.findByIdAndDelete({ _id: id });

            return {
                data: null,
                status: 200,
                message: "Delete color success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete color failed!",
            };
        }
    };
}

export default ColorServices;
