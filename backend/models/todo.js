import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        default: Date.now
    }
})

const model = mongoose.model('TodoModel',TodoSchema)
export default model