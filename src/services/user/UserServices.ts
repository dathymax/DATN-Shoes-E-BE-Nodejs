import IUser, { IWishlistShoe } from "../../models/user/IUser";
import { UserModel, WishlistShoeModel } from "../../models/user/UserModel";
import IUserServices from "./IUserServices";
import { IResponseEntity } from "../../common/IResponseEntity";

export default class UserServices implements IUserServices<IUser> {
    getUsers = async (): Promise<IResponseEntity<IUser>> => {
        try {
            const result = await UserModel.find();

            return {
                data: result,
                status: 200,
                message: "Get users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get users failed!"
            }
        }
    }

    getUserByEmail = async (email: string): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findOne({ email });;

            return {
                data: user,
                status: 200,
                message: "Get user success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get user failed!"
            }
        }
    }

    getUserById = async (userId: string): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findById(userId);

            return {
                data: user,
                status: 200,
                message: "Get user success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
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
                data: user,
                status: 200,
                message: "Create users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create users failed!"
            }
        }
    }

    deleteUserById = async (userId: string): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findByIdAndDelete({ _id: userId });

            return {
                data: user,
                status: 200,
                message: "Delete users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete users failed!"
            }
        }
    }

    updateUserById = async (userId: string, values: Record<string, any>): Promise<IResponseEntity<IUser>> => {
        try {
            const user = await UserModel.findByIdAndUpdate(userId, values, { new: true });

            return {
                data: user,
                status: 200,
                message: "Update users success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update users failed!"
            }
        }
    }

    addWishlistByUserId = async (values: Record<string, any>): Promise<IResponseEntity<IWishlistShoe>> => {
        try {
            const shoe = new WishlistShoeModel(values);

            shoe.save();

            return {
                data: shoe,
                status: 200,
                message: "Add wishlist success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Add wishlist failed!"
            }
        }
    }

    getWishlistShoeByUserId = async (userId: string): Promise<IResponseEntity<IWishlistShoe>> => {
        try {
            const shoes = await WishlistShoeModel.find().populate('images');
            const shoesFilter = shoes.filter(shoe => shoe.userId === userId);

            return {
                data: shoesFilter,
                status: 200,
                message: "Get wishlist success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get wishlist failed!"
            }
        }
    }

    deleteWishlistShoeByShoeId = async (shoeId: string): Promise<IResponseEntity<IWishlistShoe>> => {
        try {
            const shoe = await WishlistShoeModel.findOneAndDelete({ shoeId });

            return {
                data: shoe,
                status: 200,
                message: "Delete wishlist success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete wishlist failed!"
            }
        }
    }
}
