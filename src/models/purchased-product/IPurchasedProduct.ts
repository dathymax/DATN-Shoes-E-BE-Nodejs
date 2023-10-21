import { Document } from "mongoose";

export default interface IPurchasedProduct extends Document {
    name?: string;
    category?: string;
    sku?: string;
    size?: string;
    image?: string;
    color?: string;
    quantity?: number;
    price?: number | string;
    total?: number | string;
    transactionExt?: string;
}
