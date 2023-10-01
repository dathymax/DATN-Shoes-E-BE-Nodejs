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
    purchasedProduct: [
        {
            name: { type: String, required: true },
            category: { type: String, required: false },
            sku: { type: String, required: false },
            size: { type: String, required: false },
            color: { type: String, required: false },
            quantity: { type: Number, required: false },
            price: { type: Number, required: false },
            total: { type: Number, required: false },
        },
    ],
});

export const TransactionModel = mongoose.model(
    "Transaction",
    TransactionSchema
);
