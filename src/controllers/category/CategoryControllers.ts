import { Request, Response } from "express";
import CategoryServices from "../../services/category/CategoryServices";

export default class CategoryControllers {
    _services: CategoryServices;

    constructor() {
        this._services = new CategoryServices();
    }

    getAllCategories = async (req: Request, res: Response) => {
        try {
            const categories = await this._services.getCategories();

            return res.status(200).json(categories).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    getCategoryById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const category = await this._services.getCategoryById(id);

            if (!category.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(category).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    createCategory = async (req: Request, res: Response) => {
        try {
            const { name, description, status, thumbnail } = req.body;
            const existingCategory = await this._services.getCategoryByName(
                name
            );

            if (existingCategory.data) {
                return res
                    .status(400)
                    .json({ message: "Category name does existed!" })
                    .end();
            }

            if (!name) {
                return res
                    .status(400)
                    .json({ message: "Category name is required!" })
                    .end();
            }

            const category = await this._services.createCategory({
                name,
                description,
                status,
                thumbnail,
            });

            return res.status(200).json(category).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    updateCategoryById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, description, status, thumbnail } = req.body;
            const existingCategory = await this._services.getCategoryById(id);

            if (!existingCategory) {
                return res
                    .status(400)
                    .json({ message: "Can not find category!" })
                    .end();
            }

            if (!name) {
                return res
                    .status(400)
                    .json({ message: "Category name is required!" })
                    .end();
            }

            const updatedCategory = await this._services.updateCategoryById(
                id,
                {
                    name,
                    description,
                    status,
                    thumbnail,
                }
            );

            return res.status(200).json(updatedCategory).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    deleteCategoryById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const existingCategory = await this._services.getCategoryById(id);

            if (!existingCategory) {
                return res
                    .status(400)
                    .json({ message: "Can not find category!" })
                    .end();
            }

            await this._services.deleteCategoryById(id);

            return res
                .status(204)
                .json({ message: "Delete category success!" })
                .end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
}
