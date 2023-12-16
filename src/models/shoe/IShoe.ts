import IImage from "../../models/image/IImage";
import { Document } from "mongoose";

export default interface IShoe extends Document {
    name?: string;
    rate?: number;
    shoeType?: string;
    colors?: string;
    sizes?: number;
    price?: number;
    description?: string;
    category?: string;
    status?: string;
    quantity?: number | string;
    discountType?: string;
    setDiscount?: string;
    images?: IImage[];
    createDate?: Date;
    isSoldOut?: boolean;
}
