import express from 'express';
const app = express()
import mongoose from 'mongoose';
import Student from './student.model.js';

mongoose.connect('mongodb+srv://mehtatanay04:tanaymehta15@synapse.wwdu1cz.mongodb.net/unicode?retryWrites=true&w=majority&appName=Synapse')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

app.use(express.json());

app.delete('/deletestudent/:id', async(req,res)=> {
    try
    {
        const student = await Student.findByIdAndDelete(req.params.id)
        res.status(200).json(student);
    }
    catch(error)
    {
        res.status(500).json({ message: error.message })
    }
})

app.put('/updatestudent/:id', async(req,res)=> {
    try
    {
        const student = await Student.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(student);
    }
    catch(error)
    {
        res.status(500).json({message: error.message })
    }
})

app.listen(3000,()=>{
    console.log("listening on 3000")
})