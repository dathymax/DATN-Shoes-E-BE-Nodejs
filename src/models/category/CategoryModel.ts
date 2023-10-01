import mongoose from "mongoose";
import ICategory from "./ICategory";

const CategorySchema = new mongoose.Schema<ICategory>({
    name: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: false },
    thumbnail: { type: String, required: false },
});

export const CategoryModel = mongoose.model("Category", CategorySchema);
