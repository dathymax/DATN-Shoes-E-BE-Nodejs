import mongoose from "mongoose";
import IReview from "./IReview";

const ReviewSchema = new mongoose.Schema<IReview>({
    title: { type: String, required: true },
    description: { type: String, required: false },
    authorName: { type: String, required: true },
    rate: { type: Number, required: true },
    reviewDate: { type: Date, required: false },
})

export const ReviewModel = mongoose.model("Review", ReviewSchema);