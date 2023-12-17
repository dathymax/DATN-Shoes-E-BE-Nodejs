import { IResponseEntity } from "../../common/IResponseEntity";

export default interface IReviewServices<T> {
    getReviews?: (productId: string) => Promise<IResponseEntity<T>>;
    getReviewById?: (reviewId: string) => Promise<IResponseEntity<T>>;
    createReview?: (values: T) => Promise<IResponseEntity<T>>;
    updateReviewById?: (
        reviewId: string,
        values: T
    ) => Promise<IResponseEntity<T>>;
    deleteReviewById?: (
        reviewId: string,
        values: T
    ) => Promise<IResponseEntity<T>>;
}
