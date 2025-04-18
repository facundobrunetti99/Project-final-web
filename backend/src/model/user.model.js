import mongoose, { mongo } from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true

    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model('User', userSchema)