import { IResponseEntity } from "../../common/IResponseEntity";

export default interface IColorServices<T> {
    getAll?: () => Promise<IResponseEntity<T>>;
    getById?: (id: string) => Promise<IResponseEntity<T>>;
    create?: (values: T) => Promise<IResponseEntity<T>>;
    update?: (id: string, values: T) => Promise<IResponseEntity<T>>;
    delete?: (id: string) => Promise<IResponseEntity<T>>;
}
