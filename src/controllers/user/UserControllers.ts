import { Request, Response } from "express";
import UserServices from "../../services/user/UserServices";
import { random, authentication } from "../../helpers";

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
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const { email, password, username, firstname, lastname } = req.body;

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
            const { firstname, lastname } = req.body;

            const user = await this._services.getUserById(id);

            if (!user.data) {
                return res.sendStatus(400);
            }

            const updatedUser = await this._services.updateUserById(id, {
                firstname,
                lastname,
            });

            return res.status(200).json(updatedUser).end();
        } catch (error) {
            console.log(error);
            return res.sendStatus(400);
        }
    };
}
