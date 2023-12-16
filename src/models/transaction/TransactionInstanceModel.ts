import mongoose from "mongoose";
import ITransaction from "./ITransaction";

const TransactionInstanceSchema = new mongoose.Schema<ITransaction>({
    transactionNumber: { type: String, required: false },
    date: { type: String, required: false },
    invoice: { type: String, required: false },
    customerName: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    status: { type: String, required: false },
    receiptNumber: { type: String, required: false },
    address: { type: String, required: false },
    payment: { type: String, required: false },
    shipping: { type: String, required: false },
    discount: { type: String, required: false },
    subTotal: { type: String, required: false },
    tax: { type: String, required: false },
    purchasedProducts: [
        { type: mongoose.Schema.Types.ObjectId, ref: "PurchasedProduct" },
    ],
    reason: { type: String, required: false },
    imagesRoof: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
    extCode: { type: String, required: false },
    userId: { type: String, required: false },
});

export const TransactionInstanceModel = mongoose.model(
    "TransactionInstance",
    TransactionInstanceSchema
);
