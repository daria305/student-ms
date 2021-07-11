
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            lowercase: true,
            trim: true,
            unique: true,
            match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },

        password: {
            type: String,
            required: true
        },

        name: {
            type: String,
            maxlength: 24,
            trim: true,
        },

        surname: {
            type: String,
            maxlength: 24,
            trim: true,
        },

        role: {
            type: String,
            default: 'basic',
            enum: ["student", "admin"]
            },

        accessToken: {
            type: String
            }
    },
    { timestamps: true },
);

const UserModel = mongoose.model("user", userSchema);

export default UserModel;