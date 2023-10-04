import { checkAuthentication } from "../../middlewares";
import ShoeControllers from "../../controllers/shoe/ShoeControllers";
import { Router } from "express";

const shoeController = new ShoeControllers();

export default (router: Router) => {
    router.get("/shoes", checkAuthentication, shoeController.getAllShoes);
    router.get("/shoes/customer", shoeController.getAllShoes);
    router.get("/shoes/:id", checkAuthentication, shoeController.getShoeById);
    router.get("/shoes/customer/:id", shoeController.getShoeById);
    router.post("/shoes", checkAuthentication, shoeController.createShoe);
    router.delete(
        "/shoes/:id",
        checkAuthentication,
        shoeController.deleteShoeById
    );
    router.patch(
        "/shoes/:id",
        checkAuthentication,
        shoeController.updateShoeById
    );
};
