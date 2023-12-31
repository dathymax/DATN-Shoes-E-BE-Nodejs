import IReview from "../../models/review/IReview";
import IReviewServices from "./IReviewServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { ReviewModel } from "../../models/review/ReviewModel";

export default class ReviewServices implements IReviewServices<IReview> {
    getReviews = async (
        productId: string
    ): Promise<IResponseEntity<IReview>> => {
        try {
            const reviews = await ReviewModel.find({ productId: productId });

            return {
                data: reviews,
                status: 200,
                message: "Get review success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get review failed!",
            };
        }
    };

    getReviewById = async (
        reviewId: string
    ): Promise<IResponseEntity<IReview>> => {
        try {
            const review = await ReviewModel.findById(reviewId);

            return {
                data: review,
                status: 200,
                message: "Get review success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get review failed!",
            };
        }
    };

    createReview = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<IReview>> => {
        try {
            const review = new ReviewModel(values);

            review.save();

            return {
                data: review,
                status: 200,
                message: "Create review success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create review failed!",
            };
        }
    };

    deleteReviewById = async (
        reviewId: string
    ): Promise<IResponseEntity<IReview>> => {
        try {
            const review = await ReviewModel.findByIdAndDelete({
                _id: reviewId,
            });

            return {
                data: review,
                status: 200,
                message: "Delete review failed!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete review failed!",
            };
        }
    };

    updateReviewById = async (
        reviewId: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<IReview>> => {
        try {
            const review = await ReviewModel.findByIdAndUpdate(
                reviewId,
                values,
                { new: true }
            );

            return {
                data: review,
                status: 200,
                message: "Update review success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update review failed!",
            };
        }
    };
}
