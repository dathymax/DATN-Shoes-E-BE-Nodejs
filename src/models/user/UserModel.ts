import mongoose from "mongoose";
import IUser from "./IUser";

const UserSchema = new mongoose.Schema<IUser>({
    fullname: { type: String, required: false },
    email: { type: String, required: true },
    username: { type: String, required: true },
    authentication: {
        password: { type: String, required: false },
        salt: { type: String, required: false },
        sessionToken: { type: String, required: false }
    }
})

export const UserModel = mongoose.model("User", UserSchema);