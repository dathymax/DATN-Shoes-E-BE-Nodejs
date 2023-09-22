import ShoeControllers from "../../controllers/shoe/ShoeControllers";
import { Router } from "express";
import { isAuthenticated } from "../../middlewares";

const shoeController = new ShoeControllers();

export default (router: Router) => {
    router.get("/shoes", isAuthenticated, shoeController.getAllShoes);
    router.get("/shoes/:id", isAuthenticated, shoeController.getShoeById);
    router.post("/shoes", isAuthenticated, shoeController.createShoe);
    router.delete("/shoes/:id", isAuthenticated, shoeController.deleteShoeById);
    router.patch("/shoes/:id", isAuthenticated, shoeController.updateShoeById);
}