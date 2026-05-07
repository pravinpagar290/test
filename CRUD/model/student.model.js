import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name:String,
    roll_no:Number
})
const studentModel= mongoose.model("student",studentSchema);
export default studentModel;





















































//MONGO_URL=mongodb+srv://pravinpagar290:S1FEF7rI7TVokgOM@cluster0.auc1dq3.mongodb.net/CRUD?appName=Cluster0