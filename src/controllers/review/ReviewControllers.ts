import { Request, Response } from "express";
import ReviewServices from "../../services/review/ReviewServices";
import { UserModel } from "../../models/user/UserModel";

export default class ReviewControllers {
    _services: ReviewServices;

    constructor() {
        this._services = new ReviewServices();
    }

    getAllReviews = async (req: Request, res: Response) => {
        try {
            const reviews = await this._services.getReviews();

            return res.status(200).json(reviews).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    getReviewById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const review = await this._services.getReviewById(id);

            if (!review.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(review).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    createReview = async (req: Request, res: Response) => {
        try {
            const {
                authorName,
                authorEmail,
                title,
                description,
                rate,
                userId,
            } = req.body;

            const user = await UserModel.findById(userId);

            if (!title || !rate) {
                return res.sendStatus(400);
            }

            const review = await this._services.createReview({
                title,
                description,
                rate,
                authorName: !authorName
                    ? `${user.firstname || ""} ${user.lastname || ""}`
                    : authorName,
                authorEmail: !authorEmail ? user.email || "" : authorEmail,
                reviewDate: new Date(),
            });

            return res.status(200).json(review).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "You must have login to write a review!" });
        }
    };

    updateReviewById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { title, description, rate } = req.body;

            const existingReview = await this._services.getReviewById(id);

            if (!existingReview.data) {
                return res.sendStatus(400);
            }

            const updatedReview = await this._services.updateReviewById(id, {
                title,
                description,
                rate,
            });

            return res.status(200).json(updatedReview).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    deleteReviewById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const review = await this._services.getReviewById(id);

            if (!review.data) {
                return res.sendStatus(400);
            }

            await this._services.deleteReviewById(id);

            return res.sendStatus(204);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
}
