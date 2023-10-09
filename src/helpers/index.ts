import crypto from "crypto";
import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const SECRET = "JTADD-REST-API";

export const random = () => crypto.randomBytes(128).toString("base64");

export const authentication = (salt: string, password: string) => {
    return crypto
        .createHmac("sha256", [salt, password].join("/"))
        .update(SECRET)
        .digest("hex");
};

export const storage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: DestinationCallback
    ): void => {
        callback(null, "public/uploads");
    },

    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: FileNameCallback
    ): void => {
        callback(
            null,
            file.originalname
        );
    },
});

export const upload = multer({ storage });

export const imageFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        callback(null, true);
    } else {
        callback(null, false);
    }
};

export function countDays(startDate: Date, endDate: Date) {
    const startMillis = startDate.getTime();
    const endMillis = endDate.getTime();

    const differenceMillis = endMillis - startMillis;

    const differenceDays = Math.ceil(differenceMillis / 86400000);

    return differenceDays;
}