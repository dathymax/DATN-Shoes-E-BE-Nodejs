import mongoose from "mongoose";
import IReview from "./IReview";

const ReviewSchema = new mongoose.Schema<IReview>(
    {
        title: { type: String, required: true, maxlength: 50 },
        description: { type: String, required: false, maxlength: 150 },
        authorName: { type: String, required: true },
        rate: { type: Number, required: true },
        reviewDate: { type: Date, required: false },
        productId: { type: String, required: false },
    },
    { timestamps: true }
);

export const ReviewModel = mongoose.model("Review", ReviewSchema);
