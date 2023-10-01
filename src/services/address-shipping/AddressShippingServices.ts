import { AddressShippingModel } from './../../models/address-shipping/AddressShippingModel';
import IAddressShipping from "../../models/address-shipping/IAddressShipping";
import IAddressShippingServices from "./IAddressShippingServices";
import { IResponseEntity } from "../../common/IResponseEntity";

export default class AddressShippingServices implements IAddressShippingServices<IAddressShipping> {
    createAddressShipping = async (values: Record<string, any>): Promise<IResponseEntity<IAddressShipping>> => {
        try {
            const addressShipping = new AddressShippingModel(values);

            await addressShipping.save();

            return {
                data: addressShipping,
                status: 200,
                message: "Create address shipping success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Create address shipping failed!"
            }
        }
    };

    getAddressByUserId = async (userId: string): Promise<IResponseEntity<IAddressShipping>> => {
        try {
            const address = await AddressShippingModel.find({ userId });

            return {
                data: address,
                status: 200,
                message: "Get address by user success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get address by user failed!"
            }
        }
    }

    getAddressById = async (addressId: string): Promise<IResponseEntity<IAddressShipping>> => {
        try {
            const address = await AddressShippingModel.findById(addressId);

            return {
                data: address,
                status: 200,
                message: "Get address success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Get address failed!"
            }
        }
    }

    updateAddressShippingById = async (addressId: string, values: Record<string, any>): Promise<IResponseEntity<IAddressShipping>> => {
        try {
            const address = await AddressShippingModel.findByIdAndUpdate(addressId, values, { new: true });

            return {
                data: address,
                status: 200,
                message: "Update address success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Update address failed!"
            }
        }
    }

    deleteAddressShippingById = async (addressId: string): Promise<IResponseEntity<IAddressShipping>> => {
        try {
            await AddressShippingModel.findByIdAndDelete({ _id: addressId });

            return {
                data: null,
                status: 204,
                message: "Delete address success!"
            }
        } catch (error) {
            console.log(error);
            return {
                data: null,
                status: 400,
                message: "Delete address failed!"
            }
        }
    }
}