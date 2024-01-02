import { useState } from "react";
import questions from "./components/questions";
import React from "react";

function App() {
  const [QuestionIndex,setQuestionIndex]=useState(0)
  const [Score,setScore]=useState(0)
  const [result,setResult]=useState(false)

  const replay=()=>{
    setQuestionIndex(0);
    setScore(0);
    setResult(false);
  }

  const present_question=questions[QuestionIndex]
  const get_choice=(index)=>{
    if(present_question.answer===index){
      setScore(Score+1)
    }
    const next_question=QuestionIndex+1 
    if(next_question < questions.length)
    {
        setQuestionIndex(QuestionIndex+1)
    }
    else{
      setResult(true)
    }
  }
  return (
    <div className='quiz_box'>
      {result?(<>
      <h1>{Score}</h1>
      <button onClick={replay}>Play Again</button>
      </>)     
      :     
      (<div className="quiz_question">
        {present_question.question}
        <div className="quiz_box_options"></div>
        <ul className='quiz_ul'>
          {present_question.options.map((option,i) =>{
            return <li className='quiz_li' onClick={()=> get_choice(i)}>{option}</li>
          })}
        </ul>
      </div>)}
      
    </div>
  );
}

export default App;
