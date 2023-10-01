import { IResponseEntity } from "common/IResponseEntity";

export default interface IAddressShippingServices<T> {
    createAddressShipping?: (values: T) => Promise<IResponseEntity<T>>,
    getAddressByUserId?: (userId: string) => Promise<IResponseEntity<T>>,
    getAddressById?: (addressId: string) => Promise<IResponseEntity<T>>,
    updateAddressShippingById?: (id: string, values: T) => Promise<IResponseEntity<T>>,
    deleteAddressShippingById?: (id: string) => Promise<IResponseEntity<T>>,
}