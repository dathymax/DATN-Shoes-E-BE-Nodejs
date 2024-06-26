import mongoose from "mongoose";
import IPurchasedProduct from "./IPurchasedProduct";

const PurchasedProductSchema = new mongoose.Schema<IPurchasedProduct>({
    productId: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: false },
    sku: { type: String, required: false },
    size: { type: String, required: false },
    image: { type: String, required: false },
    color: { type: String, required: false },
    quantity: { type: Number, required: false },
    price: { type: Number, required: false },
    total: { type: Number, required: false },
    extCode: { type: String, required: false },
    originalPrice: { type: Number, required: false },
});

export const PurchasedProductModel = mongoose.model(
    "PurchasedProduct",
    PurchasedProductSchema
);
