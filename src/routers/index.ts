import { Router } from "express";
import user from "./user";
import auth from "./auth";
import shoe from "./shoe";
import review from "./review";
import category from "./category";
import addressShipping from "./address-shipping";
import image from "./image";

const router = Router();

export default (): Router => {
    auth(router);
    user(router);
    shoe(router);
    review(router);
    category(router);
    addressShipping(router);
    image(router);

    return router;
};
