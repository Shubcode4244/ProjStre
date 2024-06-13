import mongoose from "mongoose";

const CourseScheme = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
});

const Course = mongoose.model("Course",CourseScheme);

export default Course;