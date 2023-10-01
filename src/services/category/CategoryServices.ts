import ICategory from "../../models/category/ICategory";
import ICategoryServices from "./ICategoryServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { CategoryModel } from "../../models/category/CategoryModel";

export default class CategoryServices implements ICategoryServices<ICategory> {
    getCategories = async (): Promise<IResponseEntity<ICategory>> => {
        try {
            const categories = await CategoryModel.find();

            return {
                data: categories,
                status: 200,
                message: "Get categories success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get categories failed!",
            };
        }
    };

    getCategoryById = async (
        id: string
    ): Promise<IResponseEntity<ICategory>> => {
        try {
            const category = await CategoryModel.findById(id);

            return {
                data: category,
                status: 200,
                message: "Get category by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get category by id failed!",
            };
        }
    };

    createCategory = async (
        values: Record<string, any>
    ): Promise<IResponseEntity<ICategory>> => {
        try {
            const category = new CategoryModel(values);

            await category.save();

            return {
                data: category,
                status: 200,
                message: "Create category success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create category failed!",
            };
        }
    };

    updateCategoryById = async (
        id: string,
        values: Record<string, any>
    ): Promise<IResponseEntity<ICategory>> => {
        try {
            const updatedCategory = await CategoryModel.findByIdAndUpdate(
                id,
                values,
                { new: true }
            );

            return {
                data: updatedCategory,
                status: 200,
                message: "Update category by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update category by id failed!",
            };
        }
    };

    deleteCategoryById = async (
        id: string
    ): Promise<IResponseEntity<ICategory>> => {
        try {
            await CategoryModel.findByIdAndDelete({ _id: id });

            return {
                data: null,
                status: 204,
                message: "Delete category by id success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete category by id failed!",
            };
        }
    };

    getCategoryByName = async (
        categoryName: string
    ): Promise<IResponseEntity<ICategory>> => {
        try {
            const category = await CategoryModel.findOne({
                name: categoryName,
            });

            return {
                data: category,
                status: 200,
                message: "Get category success!",
            };
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Can not get category",
            };
        }
    };
}
