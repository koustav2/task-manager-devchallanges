import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
     taskName:{
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
     },
     descroption:{
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
     },
     icon:{
        type: String,
        required: true,
        trim: true,
     },
     status:{
        type: String,
        enum: ['To Do', 'In Progress', 'Completed', "Won't DO"],
        default: 'To Do'
     }
    },
    {
        timestamps: true
    }
)

export const Task = mongoose.model("Task", taskSchema)