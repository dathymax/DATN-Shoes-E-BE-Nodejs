import { IResponseEntity } from "common/IResponseEntity";

export default interface IPurchasedProductServices<T> {
    getAll?: () => Promise<IResponseEntity<T>>;
    getById?: (id: string) => Promise<IResponseEntity<T>>;
    create?: (values: T) => Promise<IResponseEntity<T>>;
    update?: (id: string, values: T) => Promise<IResponseEntity<T>>;
    deleteByTransactionExt?: (
        extCode: string
    ) => Promise<IResponseEntity<T>>;
    getAllByTransactionId?: (
        extCode: string
    ) => Promise<IResponseEntity<T>>;
    updateByTransactionExt?: (
        extCode: string,
        values: T
    ) => Promise<IResponseEntity<T>>;
}
