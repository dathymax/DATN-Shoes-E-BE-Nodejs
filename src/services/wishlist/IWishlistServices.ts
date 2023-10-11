import { IResponseEntity } from "common/IResponseEntity";
import IShoe from "models/shoe/IShoe";

export default interface IWishlistShoeService<T> {
    addWishlistByUserId?: (values: IShoe) => Promise<IResponseEntity<T>>,
    getWishlistShoeByUserId?: (userId: string) => Promise<IResponseEntity<T>>,
    deleteWishlistShoeByShoeId?: (shoeId: string) => Promise<IResponseEntity<T>>,
}