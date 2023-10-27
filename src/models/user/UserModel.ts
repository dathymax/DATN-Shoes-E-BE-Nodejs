import mongoose from "mongoose";
import IUser, { IWishlistShoe } from "./IUser";

const UserSchema = new mongoose.Schema<IUser>(
    {
        firstname: { type: String, required: false },
        lastname: { type: String, required: false },
        email: { type: String, required: true },
        username: { type: String, required: false },
        password: { type: String, required: true },
        role: { type: String, required: false },
        phoneNumber: { type: String, required: false },
        address: { type: String, required: false },
        addressLabel: { type: String, required: false },
        country: { type: String, required: false },
        province: { type: String, required: false },
        district: { type: String, required: false },
        postalCode: { type: String, required: false },
        city: { type: String, required: false },
        avatar: { type: String, required: false },
        updatedAt: { type: Date, required: false, default: Date.now },
        promoCodes: [
            { type: mongoose.Schema.Types.ObjectId, ref: "PromoCode" },
        ],
    },
    { timestamps: true }
);

const WishlistShoeSchema = new mongoose.Schema<IWishlistShoe>(
    {
        name: { type: String, required: false },
        rate: { type: Number, required: false },
        shoeType: { type: String, required: false },
        color: { type: String, required: false },
        size: { type: Number, required: false },
        price: { type: Number, required: false },
        description: { type: String, required: false },
        category: { type: String, required: false },
        status: { type: String, required: false },
        discountType: { type: String, required: false },
        setDiscount: { type: String, required: false },
        images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
        createDate: { type: Date, required: false },
        isLiked: { type: Boolean, required: false },
        userId: { type: String, required: false },
        shoeId: { type: String, required: false },
    },
    { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
export const WishlistShoeModel = mongoose.model(
    "WishlistShoe",
    WishlistShoeSchema
);
