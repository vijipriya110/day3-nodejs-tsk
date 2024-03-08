import  express from "express";
import { Mentor, Student } from "../models/task.js";



const router = express.Router();



//to get students data

router.get("/students-all", async(req, res)=>{
    try {
        const data = await Student.find()
        return res.status(200).json({message:"data find sucessfully", data})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})
    }
})

//to get mentors data

router.get("/mentors-all", async(req, res)=>{
    try {
        const data = await Mentor.find()
        return res.status(200).json({message:"data find sucessfully", data})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})
    }
})
//API for create student

router.post("/add-stud", async(req, res)=>{
    try {
        const { name } = req.body;
    const student = new Student({ name });
    student.save()
    if(student){
        res.status(201).json({ message: `Student ${name}  created successfully` });
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})

    }
})
//API for create Mentor

router.post("/add-ment", async(req, res)=>{
    try {
        const { name } = req.body;
    const mentor = new Mentor ({ name });
    mentor.save()
    if(mentor){
        res.status(201).json({ message: `Student ${name}  created successfully` });
    }
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})

    }
})
//API to Assign a student to Mentor

router.post("/assign/:mentorId/:studentId", async(req, res)=>{
    try {
        const { mentorId, studentId } = req.params;
        //find student by id
        const student = await Student.findById(studentId)
        if(!student.currentMentor){
            //find mentor by id
            const mentor = await Mentor.findById(mentorId)
           //one mentor and Add multiple Student 
            await Student.findByIdAndUpdate(studentId, { currentMentor: mentorId });
            return res.status(200).json({ Message: "Student assigned to mentor successfully" });
                    
        }else{
            res.status(400).json({ Message: "Already, Student assigned to mentor" });
        }
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internal server error"})
    }
     
})

//API to Assign or Change Mentor for particular Student

router.post("/reassign/:mentorId/:studentId", async(req, res)=>{
    try {
           const { mentorId, studentId } = req.params;
    
            //find student
            const student = await Student.findById(studentId)
            if(!student.currentMentor){
                return res.status(400).json({message:"first need to Assign mentor"})
            }
            //find mentor
            const mentor = await Mentor.findById(mentorId)
            
            //find and update the current mentor
            let previousmentor = [...student.previousMentor, student.currentMentor];
            await Student.findByIdAndUpdate(studentId, { currentMentor: mentorId, previousMentor: previousmentor });
            return res.status(200).json({ Message: "Mentor reassigned to student successfully"});
            
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})
    }
})

//Get all students for a particular mentor

router.get("/mentor/:mentorId", async(req, res)=>{
    try {
        const { mentorId } = req.params;
        const student = await Student.find({ currentMentor: mentorId }).populate('currentMentor')
        res.status(200).json(student);
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})
    }
})


//Get the previously assigned mentor for a particular student

router.get("/student/:studentId",async (req,res)=>{
    try {
        const { studentId } = req.params;
        const student = await Student.findById(studentId).populate('previousMentor')
        if (!student) {
            return res.status(400).json({ error: 'Student not found' });
        } else {
            res.json(student.previousMentor);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"Internl server error"})

    }
})

export const taskRouter = router