import IUser from "models/user/IUser";
import { UserModel } from "../../models/user/UserModel";
import IUserServices from "./IUserServices";
import { IResponseEntity } from "common/IResponseEntity";

export default class UserServices implements IUserServices<IUser> {
    getUsers = async (): Promise<IResponseEntity<IUser>> => {
        try {
            const result = await UserModel.find();

            return {
                response: {
                    data: result
                },
                status: 200,
                message: "Get users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                response: {
                    data: null
                },
                status: 400,
                message: "Get users failed!"
            }
        }
    }

    getUserByEmail = async (email: string): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findOne({ email });;

            return {
                response: {
                    data: user
                },
                status: 200,
                message: "Get user success!"
            }
        } catch (error) {
            console.log(error);
            return {
                response: {
                    data: null
                },
                status: 400,
                message: "Get user failed!"
            }
        }
    }

    getUserById = async (userId: string): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findById(userId);

            return {
                response: {
                    data: user
                },
                status: 200,
                message: "Get user success!"
            }
        } catch (error) {
            console.log(error);
            return {
                response: {
                    data: null
                },
                status: 400,
                message: "Get user failed!"
            }
        }
    }

    createUser = async (values: Record<string, any>): Promise<IResponseEntity<IUser>> => {
        try {
            const user = new UserModel(values);

            await user.save();

            return {
                response: {
                    data: user
                },
                status: 200,
                message: "Create users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                response: {
                    data: null
                },
                status: 400,
                message: "Create users failed!"
            }
        }
    }

    deleteUserById = async (userId: string): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findByIdAndDelete({ _id: userId });

            return {
                response: {
                    data: user
                },
                status: 200,
                message: "Delete users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                response: {
                    data: null
                },
                status: 400,
                message: "Delete users failed!"
            }
        }
    }

    updateUserById = async (userId: string, values: Record<string, any>): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findByIdAndUpdate(userId, values, { new: true });

            return {
                response: {
                    data: user
                },
                status: 200,
                message: "Update users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                response: {
                    data: null
                },
                status: 400,
                message: "Update users failed!"
            }
        }
    }
}
