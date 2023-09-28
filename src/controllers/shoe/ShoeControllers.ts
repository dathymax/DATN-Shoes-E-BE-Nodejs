import { Request, Response } from "express";
import ShoeServices from "../../services/shoe/ShoeServices";

export default class ShoeControllers {
    _services: ShoeServices;

    constructor() {
        this._services = new ShoeServices();
    }

    getAllShoes = async (req: Request, res: Response) => {
        try {
            const shoes = await this._services.getShoes();

            return res.status(200).json(shoes).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    getShoeById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const shoe = await this._services.getShoeById(id);

            if (!shoe.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(shoe).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    createShoe = async (req: Request, res: Response) => {
        try {
            const { name, rate, shoeType, color, price, size } = req.body;

            if (!name || !size || !shoeType || !color) {
                return res.sendStatus(400);
            }

            const shoe = await this._services.createShoe({
                name,
                rate,
                shoeType,
                color,
                price,
                size
            })

            return res.status(200).json(shoe).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    deleteShoeById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const shoe = await this._services.getShoeById(id);

            if (!shoe.data) {
                return res.sendStatus(400);
            }

            await this._services.deleteShoeById(id);

            return res.sendStatus(204).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }

    updateShoeById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name, size, price, rate, shoeType, color } = req.body;

            if (!name || !size || !shoeType || !color) {
                return res.sendStatus(400);
            }

            const shoe = await this._services.updateShoeById(
                id,
                {
                    name,
                    size,
                    price,
                    rate,
                    shoeType,
                    color
                }
            )

            return res.status(200).json(shoe).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    }
}