import { Request, Response } from "express";
import AddressShippingServices from "../../services/address-shipping/AddressShippingServices";

export default class AddressShippingControllers {
    _service: AddressShippingServices;

    constructor() {
        this._service = new AddressShippingServices();
    }

    createAddressShipping = async (req: Request, res: Response) => {
        try {
            const {
                addressLabel,
                country,
                address,
                province,
                city,
                district,
                postalCode,
                userId,
            } = req.body;

            const addressShipping = await this._service.createAddressShipping({
                addressLabel,
                country,
                address,
                province,
                city,
                district,
                postalCode,
                userId,
            });

            return res.status(200).json(addressShipping).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    getAddressByUserId = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const address = await this._service.getAddressByUserId(userId);

            if (!address.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(address).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    getAddressById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const address = await this._service.getAddressById(id);

            if (!address.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(address).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    updateAddressShippingById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const {
                addressLabel,
                country,
                address,
                province,
                city,
                district,
                postalCode,
            } = req.body;

            const updatedAddress = await this._service.updateAddressShippingById(id,
                {
                    addressLabel,
                    country,
                    address,
                    province,
                    city,
                    district,
                    postalCode,
                });

            return res.status(200).json(updatedAddress).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    deleteAddressShippingById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const address = await this._service.getAddressById(id);

            if (!address.data) {
                return res.sendStatus(400);
            }

            await this._service.deleteAddressShippingById(id);

            return res.sendStatus(204);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }
}