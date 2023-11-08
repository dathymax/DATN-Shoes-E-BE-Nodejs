import IPromoCode from "models/promo-code/IPromoCode";
import IImage from "../../models/image/IImage";
import IPurchasedProduct from "../../models/purchased-product/IPurchasedProduct";
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
    purchasedProducts?: IPurchasedProduct[];
    discount?: IPromoCode;
    shipping?: string | number;
    tax?: string | number;
    subTotal?: string | number;
    reason?: string,
    imagesRoof?: IImage[],
    extCode?: string;
}
