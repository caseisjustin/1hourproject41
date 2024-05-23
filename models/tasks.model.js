import mongoose from "mongoose"
const taskSchema = new mongoose.Schema({
    title: {
        type: string,
        required: true,
        max: 100
    },
    description: {
        type: string,
        max: 500
    },
    userId: {
        type: Number,
        required: true,
        ref: "User"
    }
})

export default mongoose.model('Task', taskSchema);