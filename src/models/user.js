import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: {type:String , require:true},
    surname: {type:String , require:true}, 
    age: {type: Number , min:5 , max:99}
},{
    timestamps: true
});

export default model("User", userSchema);

