import IPurchasedProduct from "models/purchased-product/IPurchasedProduct";

export default interface ITransaction {
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
