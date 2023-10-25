import PromoCodeControllers from "../../controllers/promo-code/PromoCodeControllers";
import { Router } from "express";
import { checkAuthentication } from "../../middlewares";

const promoCodeControllers = new PromoCodeControllers();

export default (router: Router) => {
    router.get("/promo-code", checkAuthentication, promoCodeControllers.getAll);
    router.get(
        "/promo-code/:id",
        checkAuthentication,
        promoCodeControllers.getById
    );
    router.get(
        "/promo-code/:userId",
        checkAuthentication,
        promoCodeControllers.getByUserId
    );
    router.post(
        "/promo-code",
        checkAuthentication,
        promoCodeControllers.create
    );
    router.patch(
        "/promo-code/:id",
        checkAuthentication,
        promoCodeControllers.update
    );
    router.delete(
        "/promo-code/:id",
        checkAuthentication,
        promoCodeControllers.delete
    );
};
