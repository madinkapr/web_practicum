import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    specialty: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})


export default model('Teachers', teacherSchema)