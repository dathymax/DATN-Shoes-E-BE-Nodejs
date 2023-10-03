import ImagesControllers from "../../controllers/image/ImageControllers";
import { Router } from "express";
import { upload } from "../../helpers";

const imagesControllers = new ImagesControllers;

export default (router: Router) => {
    router.post("/images", upload.single("file"), imagesControllers.uploadFile);
    router.get("/images/:id", imagesControllers.getFileById);
    router.delete("/images/:id", imagesControllers.deleleFileById);
    router.patch("/images/:id", imagesControllers.updateFile);
}