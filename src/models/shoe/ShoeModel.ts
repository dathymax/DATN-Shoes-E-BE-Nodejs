import mongoose from "mongoose";
import IShoe from "./IShoe";

const ShoeSchema = new mongoose.Schema<IShoe>({
    name: { type: String, required: true },
    rate: { type: Number, required: false },
    shoeType: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
})

export const ShoeModel = mongoose.model("Shoe", ShoeSchema);