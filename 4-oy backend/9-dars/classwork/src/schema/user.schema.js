import {model, Schema } from "mongoose";

const userSchema = new Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    age: { type: Number }
}, {
    versionKey: false,
    timestamps: true
})

export default model("User", userSchema);