import { Schema, Types, model } from "mongoose";

const studentSchema = new Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    age: { type: Number },
    group: { type: Types.ObjectId, ref: 'Groups', required: true }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Students', studentSchema)