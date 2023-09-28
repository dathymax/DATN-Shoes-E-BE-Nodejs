import { NextFunction, Request, Response } from "express";
import { get, merge } from "lodash";
import { UserModel } from "../models/user/UserModel";
import JWT from "jsonwebtoken";

export const getUserBySesstionToken = (sesstionToken: string) => UserModel.findOne({
    "authentication.sessionToken": sesstionToken
});

export const isOwner = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const currentUserId = get(req, 'identity._id') as string;

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

        merge(req, { identity: existingUser });

        return next();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export async function checkAuthentication(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodeToken) => {
        if (err) {
            console.log(err)
            return res.sendStatus(403)
        }
        console.log(decodeToken);
        next()
    })
}