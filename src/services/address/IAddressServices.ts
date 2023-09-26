import { IResponseEntity } from "common/IResponseEntity";

export default interface IAddressServices<T> {
    getAddresses?: () => Promise<IResponseEntity<T>>,
    getAddressById?: () => Promise<IResponseEntity<T>>,
    createAddress?: (values: T) => Promise<IResponseEntity<T>>,
    deleteAddressById?: (id: string) => Promise<IResponseEntity<T>>,
    updateAddressById?: (id: string, values: T) => Promise<IResponseEntity<T>>,
}