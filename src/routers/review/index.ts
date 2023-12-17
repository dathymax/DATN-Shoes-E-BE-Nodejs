import { checkAuthentication } from "../../middlewares";
import ReviewControllers from "../../controllers/review/ReviewControllers";
import { Router } from "express";

const reviewController = new ReviewControllers();

export default (router: Router) => {
    router.get(
        "/reviews/:productId",
        checkAuthentication,
        reviewController.getAllReviews
    );
    router.get("/reviews/customer/:productId", reviewController.getAllReviews);
    router.get(
        "/reviews/:id",
        checkAuthentication,
        reviewController.getReviewById
    );
    router.get("/reviews/customer/:id", reviewController.getReviewById);
    router.post("/reviews", checkAuthentication, reviewController.createReview);
    router.patch(
        "/reviews/:id",
        checkAuthentication,
        reviewController.updateReviewById
    );
    router.delete(
        "/reviews/:id",
        checkAuthentication,
        reviewController.deleteReviewById
    );
};
