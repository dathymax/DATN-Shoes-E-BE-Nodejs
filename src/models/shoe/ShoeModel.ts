import mongoose from "mongoose";
import IShoe from "./IShoe";

const ShoeSchema = new mongoose.Schema<IShoe>(
    {
        name: { type: String, required: true },
        rate: { type: Number, required: false },
        shoeType: { type: String, required: false },
        colors: { type: [String], required: true },
        size: { type: Number, required: false },
        price: { type: Number, required: false },
        description: { type: String, required: false },
        category: { type: String, required: false },
        status: { type: String, required: false },
        discountType: { type: String, required: false },
        setDiscount: { type: String, required: false },
        images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
        createDate: { type: Date, required: false },
        quantity: { type: Number, required: true },
    },
    { timestamps: true }
);

export const ShoeModel = mongoose.model("Shoe", ShoeSchema);
