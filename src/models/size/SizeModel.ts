import mongoose from "mongoose";
import ISize from "./ISize";

const SizeSchema = new mongoose.Schema<ISize>(
    {
        size: { type: Number, required: true },
    },
    { timestamps: true }
);

export const SizeModel = mongoose.model("Size", SizeSchema);
