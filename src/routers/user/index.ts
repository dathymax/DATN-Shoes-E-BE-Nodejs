import { checkAuthentication, isOwner } from "../../middlewares";
import UserControllers from "../../controllers/user/UserControllers";
import { Router } from "express";

const userController = new UserControllers();

export default (router: Router) => {
    router.get("/users", checkAuthentication, userController.getAllUsers);
    router.post("/users", userController.createUser);
    router.delete(
        "/users/:id",
        checkAuthentication,
        isOwner,
        userController.deleteUserById
    );
    router.patch(
        "/users/:id",
        checkAuthentication,
        isOwner,
        userController.updateUserById
    );
    router.get(
        "/users/:id",
        checkAuthentication,
        isOwner,
        userController.getUserById
    );
    router.post("/users/email", userController.getUserByEmail)
};
