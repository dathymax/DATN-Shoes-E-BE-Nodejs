import { isAuthenticated } from "../../middlewares";
import ReviewControllers from "../../controllers/review/ReviewControllers";
import { Router } from "express";

const reviewController = new ReviewControllers();

export default (router: Router) => {
    router.get("/reviews", isAuthenticated, reviewController.getAllReviews);
    router.get("/reviews/:id", isAuthenticated, reviewController.getReviewById);
    router.post("/reviews", isAuthenticated, reviewController.createReview);
    router.patch("/reviews/:id", isAuthenticated, reviewController.updateReviewById);
    router.delete("/reviews/:id", isAuthenticated, reviewController.deleteReviewById);
}