import mongoose from "mongoose";
import ITransaction from "./ITransaction";

const TransactionSchema = new mongoose.Schema<ITransaction>({
    transactionNumber: { type: String, required: false },
    date: { type: String, required: false },
    invoice: { type: String, required: false },
    customerName: { type: String, required: false },
    phoneNumber: { type: Number, required: false },
    status: { type: String, required: false },
    receiptNumber: { type: Number, required: false },
    address: { type: String, required: false },
    payment: { type: String, required: false },
    shipping: { type: String, required: false },
    discount: { type: String, required: false },
    subTotal: { type: String, required: false },
    tax: { type: String, required: false },
    purchasedProducts: [
        { type: mongoose.Schema.Types.ObjectId, ref: "PurchasedProduct" },
    ],
});

export const TransactionModel = mongoose.model(
    "Transaction",
    TransactionSchema
);
