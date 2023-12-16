import { NextFunction, Request, Response } from "express";
import ColorServices from "../../services/color/ColorServices";

class ColorControllers {
    _service: ColorServices;

    constructor() {
        this._service = new ColorServices();
    }

    getAllColor = async (req: Request, res: Response) => {
        try {
            const colors = await this._service.getAll();

            if (!colors.data) {
                return res
                    .status(400)
                    .json({
                        message: "Get all color failed",
                    })
                    .end();
            }

            return res.status(200).json(colors).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Get all color failed",
                })
                .end();
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const color = await this._service.getById(id);

            if (!color.data) {
                return res
                    .status(400)
                    .json({
                        message: "Get color failed",
                    })
                    .end();
            }

            return res.status(200).json(color).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Get color failed",
                })
                .end();
        }
    };

    createColor = async (req: Request, res: Response) => {
        try {
            const { name } = req.body;

            if (!name) {
                return res
                    .status(400)
                    .json({
                        message: "Color's name is required!",
                    })
                    .end();
            }

            const color = await this._service.create({
                name,
            });

            return res.status(200).json(color).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Create color failed!",
                })
                .end();
        }
    };

    updateColor = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { name } = req.body;

            if (!name) {
                return res
                    .status(400)
                    .json({
                        message: "Color's name is required!",
                    })
                    .end();
            }

            const color = await this._service.update(id, {
                name,
            });

            return res.status(200).json(color).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Update color failed!",
                })
                .end();
        }
    };

    deleteColor = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this._service.delete(id);

            return res
                .status(200)
                .json({
                    message: "Delete color success!",
                })
                .end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Delete color failed!",
                })
                .end();
        }
    };
}

export default ColorControllers;
