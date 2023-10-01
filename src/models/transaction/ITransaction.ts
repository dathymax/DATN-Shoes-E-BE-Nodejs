import IPurchasedProduct from "models/purchased-product/IPurchasedProduct";
import { Document } from "mongoose";

export default interface ITransaction extends Document {
    transactionNumber?: number | string;
    date?: Date | string;
    invoice?: string;
    customerName?: string;
    phoneNumber?: string | number;
    status?: string;
    receiptNumber?: string | number;
    address?: string;
    payment?: string;
    purchasedProduct?: IPurchasedProduct[];
}
