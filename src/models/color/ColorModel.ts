import mongoose from "mongoose";
import IColor from "./IColor";

const ColorSchema = new mongoose.Schema<IColor>(
    {
        name: { type: String, requried: true },
    },
    { timestamps: true }
);

export const ColorModel = mongoose.model("Color", ColorSchema);
