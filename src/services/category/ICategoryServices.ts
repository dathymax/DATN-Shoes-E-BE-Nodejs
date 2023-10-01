import { IResponseEntity } from "common/IResponseEntity";

export default interface ICategoryServices<T> {
    getCategories?: () => Promise<IResponseEntity<T>>;
    getCategoryById?: (id: string) => Promise<IResponseEntity<T>>;
    createCategory?: (values: T) => Promise<IResponseEntity<T>>;
    updateCategoryById?: (id: string, values: T) => Promise<IResponseEntity<T>>;
    deleteCategoryById?: (id: string) => Promise<IResponseEntity<T>>;
    getCategoryByName?: (categoryName: string) => Promise<IResponseEntity<T>>;
}
