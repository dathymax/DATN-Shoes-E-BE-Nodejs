import { Request, Response } from "express";
import { authentication, random } from "../../helpers";
import { UserModel } from "../../models/user/UserModel";

export const getUserByEmail = (email: string) => UserModel.findOne({ email });

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.sendStatus(400);
        }

        const user = await getUserByEmail(email).select("+authentication.salt +authentication.password");

        if (!user) {
            return res.sendStatus(400);
        }

        const expectedHash = authentication(user.authentication.salt, password);

        if (user.authentication.password !== expectedHash) {
            return res.sendStatus(403);
        }

        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie("USER-AUTH", user.authentication.sessionToken, { domain: "localhost", path: "/" });

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}