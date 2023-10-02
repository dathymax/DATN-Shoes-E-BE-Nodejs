import { Document } from "mongoose";

export default interface IReview extends Document {
    title?: string,
    description?: string,
    authorName?: string,
    authorEmail?: string,
    rate?: number,
    reviewDate?: Date,
}