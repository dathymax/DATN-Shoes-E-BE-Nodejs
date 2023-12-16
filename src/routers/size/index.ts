import { Router } from "express";
import SizeControllers from "../../controllers/size/SizeControllers";
import { checkAuthentication } from "../../middlewares";

const controllers = new SizeControllers();

export default (router: Router) => {
    router.get("/sizes", checkAuthentication, controllers.getAllSize);
    router.get("/sizes/:id", checkAuthentication, controllers.getById);
    router.post("/sizes", checkAuthentication, controllers.createSize);
    router.patch("/sizes/:id", checkAuthentication, controllers.updateSize);
    router.delete("/sizes/:id", checkAuthentication, controllers.deleteSize);
};
