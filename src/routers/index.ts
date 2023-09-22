import { Router } from "express";
import user from "./user";
import auth from "./auth";
import shoe from "./shoe";

const router = Router();

export default (): Router => {
    auth(router);
    user(router);
    shoe(router);

    return router;
}