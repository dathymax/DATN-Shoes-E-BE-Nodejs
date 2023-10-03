import { Request, Response } from "express";
import { ImageModel } from "../../models/image/ImageModel";

class ImagesControllers {
    uploadFile = async (req: Request, res: Response) => {
        try {
            const file = new ImageModel({
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: this.fileSizeFormatter(req.file.size, 3)
            })

            await file.save();

            res.status(200).json(file);
        } catch (e: any) {
            res.status(400).send(e.message);
        }
    };

    updateFile = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const data = {
                fileName: req.file.originalname,
                filePath: req.file.path,
                fileType: req.file.mimetype,
                fileSize: this.fileSizeFormatter(req.file.size, 3)
            }

            await ImageModel.findByIdAndUpdate(id, data, { new: true });

            res.status(200).send("File uploaded sucessfully!");
        } catch (e: any) {
            res.status(400).send(e.message);
        }
    };

    getFileById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const file = await ImageModel.findById(id);

            if (!file) {
                return res.sendStatus(400);
            }

            res.status(200).send(file);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    deleleFileById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const file = await ImageModel.findById(id);

            if (!file) {
                return res.sendStatus(400);
            }

            await ImageModel.findByIdAndDelete({ _id: id });
            res.sendStatus(204);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }

    fileSizeFormatter = (bytes: number, decimal: number) => {
        if (bytes === 0) {
            return "0 Bytes";
        }

        const dm = decimal || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
        const index = Math.floor(Math.log(bytes) / Math.log(1000));
        return parseFloat((bytes / Math.pow(1024, index)).toFixed(dm) + "-" + sizes[index])
    }
}

export default ImagesControllers;