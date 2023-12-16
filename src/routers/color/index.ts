import { Router } from "express";
import ColorControllers from "../../controllers/color/ColorControllers";
import { checkAuthentication } from "../../middlewares";

const controllers = new ColorControllers();

export default (router: Router) => {
    router.get("/colors", checkAuthentication, controllers.getAllColor);
    router.get("/colors/:id", checkAuthentication, controllers.getById);
    router.post("/colors", checkAuthentication, controllers.createColor);
    router.patch("/colors/:id", checkAuthentication, controllers.updateColor);
    router.delete("/colors/:id", checkAuthentication, controllers.deleteColor);
};
