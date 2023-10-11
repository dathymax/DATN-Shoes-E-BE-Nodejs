import { Request, Response } from "express";
import { ShoeModel } from "../../models/shoe/ShoeModel";
import WishlistServices from "../../services/wishlist/WishlistServices";

class WishlistControllers {
    _services: WishlistServices;

    constructor() {
        this._services = new WishlistServices();
    }

    addWishlistByUserId = async (req: Request, res: Response) => {
        try {
            const { shoeId, userId } = req.body;
            const shoeFound = await ShoeModel.findById(shoeId);

            if (!shoeId || !userId || !shoeFound) {
                return res.status(400).json({ message: "Create wishlist failed!" });
            }

            const shoe = await this._services.addWishlistByUserId({
                userId,
                shoeId: shoeFound._id,
                name: shoeFound.name,
                size: shoeFound.size,
                price: shoeFound.price,
                description: shoeFound.description,
                category: shoeFound.category,
                status: shoeFound.status,
                discountType: shoeFound.discountType,
                setDiscount: shoeFound.setDiscount,
                images: shoeFound.images,
                isLiked: true,
                createDate: new Date()
            });

            if (!shoe.data) {
                return res.status(400).json({ message: "Create wishlist failed!" });
            }

            return res.status(200).json(shoe).end();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Create wishlist failed!" });
        }
    }

    getWishlistShoeByUserId = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const shoes = await this._services.getWishlistShoeByUserId(userId);

            if (!shoes.data) {
                return res.status(400).json({ message: "Get wishlist failed!" });
            }

            return res.status(200).json(shoes).end();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Get wishlist failed!" })
        }
    }

    deleteWishlistShoeByShoeId = async (req: Request, res: Response) => {
        try {
            const { shoeId } = req.params;
            const shoe = await this._services.deleteWishlistShoeByShoeId(shoeId);

            if (shoe.status !== 200) {
                return res.status(400).json({ message: "Delete wishlist failed!" });
            }

            return res.status(200).json(shoe).end();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Delete wishlist failed!" })
        }
    }
}

export default WishlistControllers;