import { Schema, Types, model } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    image: { type: String },
    categoryId: { type: Types.ObjectId, ref: 'Category' }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Product', productSchema);
