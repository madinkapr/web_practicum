import { Schema, model } from "mongoose"

const courseSchema = new Schema({
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Courses', courseSchema)