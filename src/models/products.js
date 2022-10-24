import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true, min: 1, max: 9999 }
}, {
    timestamps: true
});

export default model("Product", productSchema);