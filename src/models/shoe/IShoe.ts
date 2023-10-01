import { Document } from "mongoose";

export default interface IShoe extends Document {
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
}
