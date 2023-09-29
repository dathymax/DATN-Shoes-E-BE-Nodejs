import {
    login,
    resetPassword,
    updatePassword,
} from "../../controllers/auth/AuthControllers";
import { Router } from "express";

export default (router: Router) => {
    router.post("/auth", login);
    router.patch("/auth/update-password/:id", updatePassword);
    router.patch("/auth/reset-password/:id/:token", resetPassword);
};
