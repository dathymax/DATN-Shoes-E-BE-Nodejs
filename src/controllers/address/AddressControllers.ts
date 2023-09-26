import { Request, Response } from "express";
import AddressServices from "../../services/address/AddressServices";

export default class AddressControllers {
    _services: AddressServices;

    constructor() {
        this._services = new AddressServices();
    }

    getAllAddress = async (req: Request, res: Response) => {
        try {
            const addresses = await this._services.getAddresses();

            if (!addresses.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(addresses).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }
}