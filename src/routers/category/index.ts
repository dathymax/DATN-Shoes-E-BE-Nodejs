import CategoryControllers from "../../controllers/category/CategoryControllers";
import { Router } from "express";
import { checkAuthentication } from "../../middlewares";

const categoryControllers = new CategoryControllers();

export default (router: Router) => {
    router.get(
        "/categories",
        checkAuthentication,
        categoryControllers.getAllCategories
    );
    router.get(
        "/categories/:id",
        checkAuthentication,
        categoryControllers.getCategoryById
    );
    router.post(
        "/categories",
        checkAuthentication,
        categoryControllers.createCategory
    );
    router.patch(
        "/categories/:id",
        checkAuthentication,
        categoryControllers.updateCategoryById
    );
    router.delete(
        "/categories/:id",
        checkAuthentication,
        categoryControllers.deleteCategoryById
    );
};
