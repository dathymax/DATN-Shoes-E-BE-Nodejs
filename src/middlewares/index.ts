import { NextFunction, Request, Response } from "express";
import { get, merge } from "lodash";
import { UserModel } from "../models/user/UserModel";
import JWT from "jsonwebtoken";

export const getUserBySesstionToken = (sesstionToken: string) =>
    UserModel.findOne({
        "authentication.sessionToken": sesstionToken,
    });

export const isOwner = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id } = req.params;

        const currentUserId = get(req, "identity._id") as string;

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
};

export const isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
};

export async function checkAuthentication(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.replace(/^"(.*)"$/, "$1");

    if (token == null) {
        console.log("Unauthorized");
        return res
            .status(401)
            .json({ message: "You cannot use this service without log in!" });
    }

    JWT.verify(token, process.env.JWT_KEY, (err) => {
        if (err) {
            console.log(err);
            return res
                .status(403)
                .json({
                    message:
                        "You do not have permission to perform this service!",
                });
        }
        next();
    });
}
