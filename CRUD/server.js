import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import studentModel from "./model/student.model.js";

config();

const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log("Error connecting to MongoDB", err);
});


app.post("/add-student", async (req, res) => {
    try {
        const { name, roll_no } = req.body;

        const student = await studentModel.create({
            name,
            roll_no
        });

        res.status(201).json({
            message: "Student added successfully",
            student
        });

    } catch (err) {
        console.log("Error adding student", err);

        res.status(500).json({
            message: "Error adding student"
        });
    }
});


app.get("/students", async (req, res) => {
    try {
        const students = await studentModel.find();

        res.status(200).json({
            message: "Students fetched successfully",
            students
        });

    } catch (error) {
        console.log("Error fetching students", error);

        res.status(500).json({
            message: "Error fetching students"
        });
    }
});


app.put("/update-student/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, roll_no } = req.body;

        const updatedStudent = await studentModel.findByIdAndUpdate(
            id,
            {
                name,
                roll_no
            },
            {
                new: true
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student updated successfully",
            updatedStudent
        });

    } catch (error) {
        console.log("Error updating student", error);

        res.status(500).json({
            message: "Error updating student"
        });
    }
});


app.delete("/delete-student/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const student = await studentModel.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student
        });

    } catch (error) {
        console.log("Error deleting student", error);

        res.status(500).json({
            message: "Error deleting student"
        });
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});