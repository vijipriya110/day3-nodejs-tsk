import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema

//define mentor schema
const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

//define student schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    currentMentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentors"
    },
    previousMentor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentors"
    }]
});

//Create a mentor model
export const Mentor = mongoose.model('Mentors', mentorSchema);

//Create a student model
export const Student = mongoose.model('Students', studentSchema);

