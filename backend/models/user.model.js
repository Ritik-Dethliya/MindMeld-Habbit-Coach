import { model, Schema } from "mongoose";

const UserSchema=new Schema({
    username:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    habbits:[{type:Schema.Types.ObjectId,ref:"habbit"}]
})

export default UserModel=model("user",UserSchema)