import mongoose from "mongoose";
import IShoe from "./IShoe";

const ShoeSchema = new mongoose.Schema<IShoe>({
    name: { type: String, required: true },
    rate: { type: Number, required: false },
    shoeType: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    category: { type: String, required: false },
    status: { type: String, required: false },
    discountType: { type: String, required: false },
    setDiscount: { type: String, required: false },
    images: [{ type: mongoose.Schema.ObjectId, ref: "Image" }],
});

export const ShoeModel = mongoose.model("Shoe", ShoeSchema);
