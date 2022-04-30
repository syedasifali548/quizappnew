import React, { useEffect, useState } from 'react'

const Quiz = ({
    data,
    questionNumber,
    setQuestionNumber,
    setTimeOut,}) => {

        const [question, setQuestion] = useState(null);
        const [selectAnswer, setSelectAnswer] = useState(null);
        const [className, setClassName] = useState('answer');
        
        const delay=(duration,callback)=>{
            setTimeout(()=>{
                callback();
            },duration)
            
        }

        const handleClick=(a)=>{
          setSelectAnswer(a);
          setClassName('answer active');
          delay(3000,()=>
          setClassName(a.correct?'answer correct':'answer wrong'))
           delay(6000,()=>{
               if(a.correct){
                   setQuestionNumber((prev)=>prev+1);
                   setSelectAnswer(null)
               }
               else{
                   setTimeOut(true);
               }
           })
        }

  
      
        useEffect(() => {
          setQuestion(data[questionNumber - 1]);
        }, [data,questionNumber]);
      
      
  return (
    <div className="trivia">
    <div className="question">{question?.question}</div>
    <div className="answers">
        {
            question?.answers.map((a)=>(
                <div className={selectAnswer===a ? className:"answer"}
                onClick={()=>handleClick(a)}
                >{a.text}</div>
            ))
        }
    </div>
  </div>
  )
}

export default Quiz