import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    email:{
        type:String,
        unique:true,
        required : true
    },
    avatar:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G0Bl_RQoIvBDvtyOHnYTiVRu0YPqym0IX8hkirRG7Q&s"
    },
}, {timestamps:true} ); 

const User = mongoose.model('User', userSchema);

export default User;