import mongoose from "mongoose";
import IUser from "./IUser";

const UserSchema = new mongoose.Schema<IUser>({
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    email: { type: String, required: true },
    username: { type: String, required: false },
    authentication: {
        password: { type: String, required: false },
        salt: { type: String, required: false },
        sessionToken: { type: String, required: false },
    },
    role: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    address: { type: String, required: false },
    addressLabel: { type: String, required: false },
    country: { type: String, required: false },
    province: { type: String, required: false },
    district: { type: String, required: false },
    postalCode: { type: String, required: false },
    city: { type: String, required: false },
    avatar: { type: String, required: false },
});

export const UserModel = mongoose.model("User", UserSchema);
