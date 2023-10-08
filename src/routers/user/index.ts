import { checkAuthentication } from "../../middlewares";
import UserControllers from "../../controllers/user/UserControllers";
import { Router } from "express";
import { upload } from "../../helpers";

const userController = new UserControllers();

export default (router: Router) => {
    router.get("/users", checkAuthentication, userController.getAllUsers);
    router.post("/users", userController.createUser);
    router.delete(
        "/users/:id",
        checkAuthentication,
        userController.deleteUserById
    );
    router.patch(
        "/users/:id",
        checkAuthentication,
        // upload.single("avatar"),
        userController.updateUserById
    );
    router.patch(
        "/users/update-avatar/:id",
        checkAuthentication,
        upload.single("avatar"),
        userController.updateUserById
    );
    router.get("/users/:id", checkAuthentication, userController.getUserById);
    router.post("/users/email", userController.getUserByEmail);
};
