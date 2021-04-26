import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'
import Todo from './models/todo.js'



const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.get('/',async(req,res)=>{
    const records = await Todo.find({})
    res.json(records)
})


app.post('/',async(req,res)=>{
    const todo = req.body
	const response = await Todo.create(todo)
	res.json({ status: 'ok' })
})

app.post('/update',async(req,res)=>{
    const { old: oldTitle, new: newTitle } = req.body

	const response = await Todo.updateOne(
		{
			text: oldTitle
		},
		{
			$set: {
				text: newTitle
			}
		}
	)

	console.log(response)

	res.json({ status: 'ok' })
})

app.post('/delete', async (req, res) => {
	const { text } = req.body
	console.log(text, '/api/delete')

	const response = await Todo.deleteOne({ text })

	console.log(response, '/api/delete repsonse')

	res.json({ status: 'ok' })
})

mongoose.connect("mongodb+srv://alok:KS3sRwdmZPPcj13C@cluster0.bjiqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
})
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo yeah!!')
})
mongoose.connection.on('error',(err)=>{
    console.log('error',err)
})


app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})