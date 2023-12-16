import { Request, Response } from "express";
import SizeServices from "../../services/size/SizeServices";

class SizeControllers {
    _service: SizeServices;

    constructor() {
        this._service = new SizeServices();
    }

    getAllSize = async (req: Request, res: Response) => {
        try {
            const sizes = await this._service.getAll();

            if (!sizes.data) {
                return res
                    .status(400)
                    .json({
                        message: "Get all size failed!",
                    })
                    .end();
            }

            return res.status(200).json(sizes).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Get all size failed!",
                })
                .end();
        }
    };

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const size = await this._service.getById(id);

            if (!size.data) {
                return res
                    .status(400)
                    .json({
                        message: "Size does not exist!",
                    })
                    .end();
            }

            return res.status(200).json(size).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Get size by id failed",
                })
                .end();
        }
    };

    createSize = async (req: Request, res: Response) => {
        try {
            const { size } = req.body;

            if (!size) {
                return res
                    .status(400)
                    .json({ message: "Size is requried!" })
                    .end();
            }

            const createdSize = await this._service.create({
                size,
            });

            return res.status(200).json(createdSize).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Create size failed!",
                })
                .end();
        }
    };

    updateSize = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { size } = req.body;

            if (!size) {
                return res
                    .status(400)
                    .json({
                        message: "Size is required!",
                    })
                    .end();
            }

            const updatedSize = await this._service.update(id, { size });

            return res.status(200).json(updatedSize).end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Update size failed!",
                })
                .end();
        }
    };

    deleteSize = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            await this._service.delete(id);

            return res
                .status(200)
                .json({
                    message: "Delete size success!",
                })
                .end();
        } catch (error) {
            console.log(error);
            return res
                .status(400)
                .json({
                    message: "Delete size failed!",
                })
                .end();
        }
    };
}

export default SizeControllers;
