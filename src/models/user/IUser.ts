import IImage from "models/image/IImage";
import IPromoCode from "models/promo-code/IPromoCode";
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
    promoCodes?: IPromoCode[];
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
    images?: IImage[];
    createDate?: Date;
    isLiked?: boolean;
    userId?: string;
}
