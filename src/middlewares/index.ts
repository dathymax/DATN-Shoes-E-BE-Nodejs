import { NextFunction, Request, Response } from "express";
import { get, merge } from "lodash";
import { UserModel } from "../models/user/UserModel";

export const getUserBySesstionToken = (sesstionToken: string) => UserModel.findOne({
    "authentication.sessionToken": sesstionToken
});

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const currentUserId = get(req, '.identity_id') as string;

        if (!currentUserId) {
            return res.sendStatus(400);
        }

        if (currentUserId.toString() !== id) {
            return res.sendStatus(403);
        }

        next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionToken = req.cookies["USER-AUTH"];

        if (!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySesstionToken(sessionToken);

        if (!existingUser) {
            return res.sendStatus(403);
        }

        merge(req, { indentity: existingUser });

        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}