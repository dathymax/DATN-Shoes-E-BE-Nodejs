import IAddress from "models/address/IAddress";
import IAddressServices from "./IAddressServices";
import { IResponseEntity } from "../../common/IResponseEntity";
import { AddressModel } from "../../models/address/AddressModel";

export default class AddressServices implements IAddressServices<IAddress> {
    getAddresses = async (): Promise<IResponseEntity<IAddress>> => {
        try {
            const addresses = await AddressModel.find();

            return {
                data: addresses,
                status: 200,
                message: "Get addresses success!",
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get addresses failed!",
            }
        }
    }
}