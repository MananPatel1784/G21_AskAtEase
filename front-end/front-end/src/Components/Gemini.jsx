import axios from "axios";
import { useState } from "react";


const Gemini=()=>{
const [question,setQuestion]=useState("");
const [answer,setAnswer]=useState("");
async function GenerateAnswer(){
   const response =await axios({
    url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA9CZJmEIUHBuRmuCFOk_iDFW5e8f1FBso",
    method:"post",
    data:{
        contents:[
            {parts:[{text:question}]},
        ],
    },
   });
   setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
}
return(
<div>
    <h1>Ask your Question to AI</h1>
    <textarea value={question} onChange={(e)=>setQuestion(e.target.value)}></textarea>
    <button onClick={GenerateAnswer}>Generate Answer</button>
    <p>{answer}</p>
</div>)
}
export default Gemini;