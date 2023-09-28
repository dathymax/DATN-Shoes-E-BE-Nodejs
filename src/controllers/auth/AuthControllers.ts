import bcryptjs from 'bcryptjs';
import { Request, Response } from "express";
import { UserModel } from "../../models/user/UserModel";
import jwt from "jsonwebtoken";

export const getUserByEmail = (email: string) => UserModel.findOne({ email });

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.sendStatus(400);
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.sendStatus(400);
        }

        if (await bcryptjs.compare(password, user.password)) {
            const token = jwt.sign({ email: user.email, }, process.env.JWT_KEY, {
                expiresIn: "15m",
            });

            return res.status(200).json(token);
        }

        return res.sendStatus(400);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}