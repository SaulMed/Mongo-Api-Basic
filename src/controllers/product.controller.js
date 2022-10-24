//Model
import Product from '../models/products.js';

export const getAllProducts =  async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json(data);
    } catch (err) {
        console.error(err)
    }
}

export const getOneProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Product.findById(id);
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
    }
}

export const postProduct =  async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const newProduct = new Product({
            name,
            category,
            price
        });
        const data = await newProduct.save();
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
    }
}

export const updateProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const { name, category, price } = req.body;
        const data = await Product.findByIdAndUpdate(id, {
            name,
            category,
            price
        }, { new: true });
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
    }
}

export const deleteProduct =  async (req,res)=>{
    try{
        const { id } = req.params;
        const data = await Product.findByIdAndDelete(id);
        res.status(200).json(data);
    }catch(err){
        console.error(err);
    }
}