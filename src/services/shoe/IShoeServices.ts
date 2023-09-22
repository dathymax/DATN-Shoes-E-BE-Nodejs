import { IResponseEntity } from "common/IResponseEntity";

export default interface IShoeServices<T> {
    getShoes?: () => Promise<IResponseEntity<T>>,
    getShoeById?: (shoeId: string) => Promise<IResponseEntity<T>>,
    getShoeByType?: (shoeType: string) => Promise<IResponseEntity<T>>,
    createShoe?: (values: T) => Promise<IResponseEntity<T>>,
    updateShoeById?: (shoeId: string, values: T) => Promise<IResponseEntity<T>>,
    deleteShoeById?: (shoeId: string) => Promise<IResponseEntity<T>>,
}