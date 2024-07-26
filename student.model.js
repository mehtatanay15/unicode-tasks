import mongoose from 'mongoose';

const schema =mongoose.Schema({
    id: String,
    name: String,
    gender: String,
    house: String,
    wizard: Boolean, 
})

const Student = mongoose.model('Student',schema)

export default Student;