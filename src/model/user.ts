import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }

    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        return next()
    } catch (err: any) {
        return next(err)
    }
})

userSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = function () {
    const jwtsecret = process.env.NEXT_JWT_SECRET;
    if (!jwtsecret) {
        throw new Error("JWT_REFRESH_SECRET is not defined in environment variables");
    }

    return jwt.sign({
        _id: this._id,
        username: this.username,
        email: this.email,
    },
        jwtsecret,

        {
            expiresIn: process.env.NEXT_ACCESS_TOKEN_EXPIRY
        })
}

export const User = mongoose.model("User", userSchema)