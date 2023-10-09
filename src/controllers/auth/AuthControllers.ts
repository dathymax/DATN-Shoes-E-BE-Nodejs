import bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import { UserModel } from "../../models/user/UserModel";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { countDays } from "../../helpers";

export const getUserByEmail = (email: string) => UserModel.findOne({ email });

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Email and password is required!" });
        }

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User does not exist!" });
        }

        if (await bcryptjs.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    id: user._id,
                    address: user.address,
                    province: user.province,
                    phoneNumber: user.phoneNumber,
                    district: user.district,
                    city: user.city,
                    addressLabel: user.addressLabel,
                    postalCode: user.postalCode,
                    avatar: user.avatar,
                    username: user.username,
                    country: user.country,
                    role: user.role,
                },
                process.env.JWT_KEY,
                {
                    expiresIn: "7d",
                }
            );

            return res.status(200).json(token);
        }

        return res
            .status(400)
            .json({ message: "Email or password is not correct!" });
    } catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({
                message:
                    "Error from server, please wait for a moment or try again!",
            });
    }
};

export const updatePassword = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { password, newPassword } = req.body;
        const user = await UserModel.findById(id);

        if (!user) {
            return res.sendStatus(400);
        }

        const dateCount = countDays(new Date(user.updatedAt), new Date());

        if (dateCount < 7) {
            return res.status(400).json({
                message:
                    "It is possible to update the password again after 7 days.",
            });
        }

        const compare = await bcryptjs.compare(password, user.password);
        const compareNewPassword = await bcryptjs.compare(
            newPassword,
            user.password
        );

        if (!compare) {
            return res.status(400).json({
                message: "Incorrect password, please try again!",
            });
        }

        if (compareNewPassword) {
            return res.status(400).json({
                message: "New password is still not change, please try again!",
            });
        }

        const encryptedPassword = await bcryptjs.hash(newPassword, 10);

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { password: encryptedPassword },
            { new: true }
        );

        return res.status(200).json(updatedUser).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    const { id, token } = req.params;
    const { password } = req.body;

    const oldUser = await UserModel.findOne({ _id: id });
    if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
    }
    const secret = process.env.JWT_KEY + oldUser.password;
    try {
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcryptjs.hash(password, 10);
        await UserModel.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: encryptedPassword,
                },
            }
        );

        res.status(200).json({ email: verify, status: "verified" });
    } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
    }
};

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const oldUser = await UserModel.findOne({ email });
        if (!oldUser) {
            return res.json({ status: "User Not Exists!!" });
        }
        const secret = process.env.JWT_KEY + oldUser.password;
        const token = jwt.sign(
            { email: oldUser.email, id: oldUser._id },
            secret,
            {
                expiresIn: "5m",
            }
        );
        const link = `http://localhost:8000/reset-password/${oldUser._id}/${token}`;
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "adarsh438tcsckandivali@gmail.com",
                pass: "rmdklolcsmswvyfw",
            },
        });

        var mailOptions = {
            from: "youremail@gmail.com",
            to: "thedebugarena@gmail.com",
            subject: "Password Reset",
            text: link,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        console.log(link);
    } catch (error) { }
};
