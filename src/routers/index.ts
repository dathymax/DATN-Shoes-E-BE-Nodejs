import { Router } from "express";
import user from "./user";
import auth from "./auth";

const router = Router();

export default (): Router => {
    auth(router);
    user(router);

    return router;
}