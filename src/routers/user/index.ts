import { isAuthenticated, isOwner } from "../../middlewares";
import UserControllers from "../../controllers/user/UserControllers";
import { Router } from "express";

const userController = new UserControllers();

export default (router: Router) => {
    router.get("/users", isAuthenticated, userController.getAllUsers);
    router.post("/users", isAuthenticated, userController.createUser);
    router.delete("/users/:id", isAuthenticated, isOwner, userController.deleteUserById);
    router.patch("/users/:id", isAuthenticated, isOwner, userController.updateUserById);
    router.get("/users/:id", isAuthenticated, isOwner, userController.getUserById);
}