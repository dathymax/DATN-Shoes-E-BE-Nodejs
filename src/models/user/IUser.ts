import IImages from "models/image/IImage";
import IShoe from "models/shoe/IShoe";
import { Document } from "mongoose";

export default interface IUser extends Document {
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
    address?: string;
    addressLabel?: string;
    country?: string;
    province?: string;
    district?: string;
    postalCode?: string;
    city?: string;
    avatar?: string;
    updatedAt?: Date | string;
}

export interface IWishlistShoe extends Document {
    shoeId?: string;
    name?: string;
    rate?: number;
    shoeType?: string;
    color?: string;
    size?: number;
    price?: number;
    description?: string;
    category?: string;
    status?: string;
    discountType?: string;
    setDiscount?: string;
    images?: IImages[];
    createDate?: Date;
    isLiked?: boolean;
    userId?: string;
}