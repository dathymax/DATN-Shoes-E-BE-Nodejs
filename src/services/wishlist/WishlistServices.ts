import { IWishlistShoe } from "../../models/user/IUser";
import IWishlistShoeService from "./IWishlistServices";
import { WishlistShoeModel } from "../../models/user/UserModel";
import { IResponseEntity } from "../../common/IResponseEntity";
import { mapWishlistShoesToUpdated } from "../../mapper/shoe";

class WishlistServices implements IWishlistShoeService<IWishlistShoe> {
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

            const updatedShoes = mapWishlistShoesToUpdated(shoesFilter);

            return {
                data: updatedShoes,
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
            await WishlistShoeModel.findOneAndDelete({ shoeId });

            return {
                data: null,
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

export default WishlistServices;