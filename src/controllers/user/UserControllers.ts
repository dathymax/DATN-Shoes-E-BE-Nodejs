import { Request, Response } from "express";
import UserServices from "../../services/user/UserServices";
import bcryptjs from "bcryptjs";
import { authentication, random } from "../../helpers";
import { UserModel } from "../../models/user/UserModel";
import { ShoeModel } from "../../models/shoe/ShoeModel";

export default class UserControllers {
    _services: UserServices;

    constructor() {
        this._services = new UserServices();
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const users = await this._services.getUsers();

            return res.status(200).json(users);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    getUserById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const user = await this._services.getUserById(id);

            if (!user.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    getUserByEmail = async (req: Request, res: Response) => {
        try {
            const { email } = req.params;

            const user = await this._services.getUserByEmail(email);

            if (!user.data) {
                return res.sendStatus(400);
            }

            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    createUserWithAuthen = async (req: Request, res: Response) => {
        try {
            const {
                email,
                password,
                username,
                firstname,
                lastname,
                role,
                phoneNumber,
                address,
                addressLabel,
                country,
                province,
                district,
                postalCode,
                city,
                avatar,
            } = req.body;

            if (!email || !password) {
                return res.sendStatus(400);
            }

            const existingUser = await this._services.getUserByEmail(email);

            if (existingUser.data) {
                return res.sendStatus(400);
            }

            const salt = random();
            const user = await this._services.createUser({
                firstname: firstname || "",
                lastname: lastname || "",
                email,
                username: username || "",
                authentication: {
                    salt,
                    password: authentication(salt, password),
                },
                role,
                phoneNumber,
                address,
                addressLabel,
                country,
                province,
                district,
                postalCode,
                city,
                avatar,
            });

            if (user.status === 400) {
                return res.sendStatus(400);
            }

            return res.status(200).json(user).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    createUser = async (req: Request, res: Response) => {
        try {
            const {
                email,
                password,
                username,
                firstname,
                lastname,
                phoneNumber,
                address,
                addressLabel,
                country,
                province,
                district,
                postalCode,
                city,
                avatar,
            } = req.body;

            if (!email || !password) {
                return res
                    .status(400)
                    .json({ message: "Email and password is required!" });
            }

            const existingUser = await this._services.getUserByEmail(email);

            if (existingUser.data) {
                return res.status(400).json({ message: "User does existing!" });
            }

            const encodePassword = await bcryptjs.hash(password, 8);

            const user = await this._services.createUser({
                firstname: firstname || "",
                lastname: lastname || "",
                email,
                username: username || "",
                password: encodePassword,
                role: "user",
                phoneNumber,
                address,
                addressLabel,
                country,
                province,
                district,
                postalCode,
                city,
                avatar,
            });

            return res.status(200).json(user).end();
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message:
                    "Error from server, please wait for a moment or try again!",
            });
        }
    };

    deleteUserById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const user = await this._services.getUserById(id);

            if (!user.data) {
                return res.sendStatus(400);
            }

            await this._services.deleteUserById(id);

            return res.status(200).json(user).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    updateUserById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const {
                username,
                firstname,
                lastname,
                phoneNumber,
                address,
                addressLabel,
                country,
                province,
                district,
                postalCode,
                city,
                role,
                avatar,
                promoCodes,
            } = req.body;

            const user = await this._services.getUserById(id);

            if (!user.data) {
                return res.sendStatus(400);
            }

            const updatedUser = await this._services.updateUserById(id, {
                username,
                firstname,
                lastname,
                phoneNumber,
                address,
                addressLabel,
                country,
                province,
                district,
                postalCode,
                city,
                role,
                avatar,
                promoCodes,
            });

            return res.status(200).json(updatedUser).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };

    updateUserAvatar = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { avatar } = req.body;
            const user = await this._services.getUserById(id);

            if (!user.data) {
                return res.sendStatus(400);
            }

            const updatedUser = await this._services.updateUserById(id, {
                ...user.data,
                avatar,
            });

            return res.status(200).json(updatedUser).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
}
