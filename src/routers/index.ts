import { Router } from "express";
import user from "./user";
import auth from "./auth";
import shoe from "./shoe";
import review from "./review";
import category from "./category";
import addressShipping from "./address-shipping";
import image from "./image";
import wishlist from "./wishlist";
import transaction from "./transaction";
import promoCode from "./promo-code";
import color from "./color";
import size from "./size";

const router = Router();

export default (): Router => {
    auth(router);
    user(router);
    shoe(router);
    review(router);
    category(router);
    addressShipping(router);
    image(router);
    wishlist(router);
    transaction(router);
    promoCode(router);
    color(router);
    size(router);

    return router;
};
