import { IResponseEntity } from "../../common/IResponseEntity";
import ISize from "../../models/size/ISize";
import { SizeModel } from "../../models/size/SizeModel";
import ISizeServices from "./ISizeServices";

class SizeServices implements ISizeServices<ISize> {
    getAll = async (): Promise<IResponseEntity<ISize>> => {
        try {
            const sizes = await SizeModel.find();

            return {
                data: sizes,
                status: 200,
                message: "Get all size success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get all size failed!",
            };
        }
    };

    getById = async (id: string): Promise<IResponseEntity<ISize>> => {
        try {
            const size = await SizeModel.findById(id);

            if (!size) {
                return {
                    data: null,
                    status: 400,
                    message: "Size does not exist!",
                };
            }

            return {
                data: size,
                status: 200,
                message: "Get size by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get size by id failed!",
            };
        }
    };

    create = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<ISize>> => {
        try {
            const size = new SizeModel(values);

            await size.save();

            return {
                data: size,
                status: 200,
                message: "Create size success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create size failed!",
            };
        }
    };

    update = async (
        id: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<ISize>> => {
        try {
            const size = await SizeModel.findByIdAndUpdate(id, values, {
                new: true,
            });

            if (!size) {
                return {
                    data: null,
                    status: 400,
                    message: "Size does not exist!",
                };
            }

            return {
                data: size,
                status: 200,
                message: "Update size success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update size failed!",
            };
        }
    };

    delete = async (id: string): Promise<IResponseEntity<ISize>> => {
        try {
            const size = await SizeModel.findById(id);

            if (!size) {
                return {
                    data: null,
                    status: 400,
                    message: "Size does not exist!",
                };
            }

            await SizeModel.findByIdAndDelete({ _id: id });

            return {
                data: null,
                status: 200,
                message: "Delete size success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete size failed!",
            };
        }
    };
}

export default SizeServices;
