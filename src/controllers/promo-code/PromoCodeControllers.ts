import { Request, Response } from "express";
import PromoCodeServices from "../../services/promo-code/PromoCodeServices";

class PromoCodeControllers {
    _services: PromoCodeServices;

    constructor() {
        this._services = new PromoCodeServices();
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const promoCodes = await this._services.getAll();

            if (!promoCodes.data) {
                return res
                    .status(400)
                    .json({ message: "Get promo code failed!" });
            }

            return res.status(200).json(promoCodes).end();
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "Get promo code failed!" });
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const promoCode = await this._services.getById(id);

            if (!promoCode.data) {
                return res
                    .status(400)
                    .json({ message: "Get promo code by id failed!" });
            }

            return res.status(200).json(promoCode).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Get promo code by id failed!" });
        }
    };

    getByUserId = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const promoCodes = await this._services.getByUserId(userId);

            if (!promoCodes.data) {
                return res
                    .status(400)
                    .json({ message: "Get promo code by id failed!" });
            }

            return res.status(200).json(promoCodes).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Get promo code by user id failed!" });
        }
    };

    create = async (req: Request, res: Response) => {
        try {
            const { name } = req.body;
            const promoCode = await this._services.create({
                name,
            });

            if (!promoCode.data) {
                return res
                    .status(400)
                    .json({ message: "Create promo code failed!" });
            }

            return res.status(200).json(promoCode).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Create promo code failed!" });
        }
    };

    update = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const promoCode = await this._services.update(id, { name });

            if (!promoCode.data) {
                return res
                    .status(400)
                    .json({ message: "Update promo code failed!" });
            }

            return res.status(200).json(promoCode).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Update promo code failed!" });
        }
    };

    delete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await this._services.delete(id);

            return res
                .status(200)
                .json({ message: "Delete promo code success!" })
                .end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({ message: "Delete promo code failed!" });
        }
    };
}

export default PromoCodeControllers;
