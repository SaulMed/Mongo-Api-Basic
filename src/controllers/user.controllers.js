//Model
import User from '../models/user.js';

export const getAll =  async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    } catch (err) {
        console.error(err)
    }
}

export const getOne =  async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        console.error(err)
    }
}

export const postUser =  async (req, res) => {
    try {
        const { name, surname, age } = req.body;
        const newUser = await new User({
            name,
            surname,
            age
        })
        await newUser.save();
        res.status(200).json(newUser);
    } catch (err) {
        console.error(err);
    }
}

export const updateUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const {name,surname,age} = req.body;
        const userEdit = await User.findByIdAndUpdate(id,{
            name,
            surname,
            age
        },{ new: true })
        res.status(200).json(userEdit)
    }catch(err){
        console.error(err);
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const data = await User.findByIdAndDelete(id);
        res.status(200).json(data);
    }catch(err){
        console.error(err);
    }
}