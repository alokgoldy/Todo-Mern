import React,{useState,useEffect} from 'react';
import './App.css'
import Navbar from './components/navbar'
import InputField from './components/inputField'
import TodoContainer from './components/todoContainer'
import axios from 'axios'

const App = () => {

    const [input,setInput] = useState([]);
    const [text,setText] = useState("");
    const [oldText,setOldText] = useState("");
    const [flag,setFlag] = useState(false)
    
    useEffect(()=>{
        async function fetchdata(){
            const record = await axios.get("http://localhost:9000")
            const newInput = record.data.map(data=> data.text)
            setInput(newInput)
        }
        fetchdata()
        console.log("use effect aya h")
    },[text])

    useEffect(()=>{
        async function fetchdata(){
            const record = await axios.get("http://localhost:9000")
            const newInput = record.data.map(data=> data.text)
            setInput(newInput)
        }
        fetchdata()
        console.log("use effect aya h")
    },[])


    const setArray = async () => {
        if(flag===true){
            await axios.post("http://localhost:9000/update",{
                new: text,
                old: oldText  
            })
            .catch(function (error){
                console.log(error);
            });
            setFlag(!flag)
        }
        else{
            await axios.post("http://localhost:9000",{
                    text  
            })
            .catch(function (error){
                console.log(error);
            }); 
        }
        setText("");
    }

    const editFun = async (idx) => {
        setFlag(true)
        setText(input[idx])
        setOldText(input[idx])
    }

    const removeFun = async(idx) => {
        await axios.post("http://localhost:9000/delete",{
                text:input[idx]  
            })
            .catch(function (error){
                console.log(error);
            });
    }
    
    return(
        <div className="app">
            <Navbar/>
            <InputField set={setText} text={text} setArray={setArray}/>
            <TodoContainer data={input} editFun={editFun} removeFun={removeFun}/>
        </div>
    )
}

export default App;