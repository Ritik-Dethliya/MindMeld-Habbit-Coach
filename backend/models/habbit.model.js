import { model, Schema } from "mongoose";

const HabitSchema=new Schema({
    habitName:{type:String,required:true},
    goal:{type:String,required:true},
    streak: { type: Number, default: 0 },
    status:{type:String,enum:["Good","Bad","Moderate"],default:"Moderate"},
    frequency: {
        type: String,
        enum: ["Daily", "Weekly", "Monthly"],
        default: "Daily",
    },
   createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
   history: [
    {
      date: Date,
      completed: Boolean
    }
  ]
},{timestamps:true})

export default HabitModel=model('habit',HabitSchema)