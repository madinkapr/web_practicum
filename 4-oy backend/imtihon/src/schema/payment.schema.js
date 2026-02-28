import { Schema, Types, model, trusted } from "mongoose";

const paymentSchema = new Schema({
    student: { type: Types.ObjectId, ref: 'Students', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
}, {
    versionKey: false,
    timestamps: true
})

export default model('Payments', paymentSchema)