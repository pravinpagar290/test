import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name:String,
    roll_no:Number
})
const studentModel= mongoose.model("student",studentSchema);
export default studentModel;