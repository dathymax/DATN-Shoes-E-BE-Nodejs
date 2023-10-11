import IShoe from "models/shoe/IShoe";
import { IResponseEntity } from "../../common/IResponseEntity";

export default interface IUserServices<T> {
    getUsers?: () => Promise<IResponseEntity<T>>,
    createUser?: (values: T) => Promise<IResponseEntity<T>>,
    deleteUserById?: (userId: string) => Promise<IResponseEntity<T>>,
    getUserByEmail?: (email: string) => Promise<IResponseEntity<T>>,
    getUserById?: (userId: string) => Promise<IResponseEntity<T>>,
    updateUserById?: (userId: string, values: T) => Promise<IResponseEntity<T>>,
}