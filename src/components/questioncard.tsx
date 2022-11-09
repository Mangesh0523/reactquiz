import React from "react";


// type

import {AnswerObject } from '../App';

// styles

// import {Wrapper  , ButtonWrappeer } from './questioncard.styles';

type Props ={
    question:string;
    answers: string [];
    callback:(e: React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnswerObject | undefined;
    questionNo:number;
    totalquestions:number;
}
const QuestionCard : React.FC<Props> =({question, answers, callback, userAnswer,questionNo, totalquestions})=>
( 
<div>
<p className="number">
    Question : {questionNo} / {totalquestions}
</p>
<p dangerouslySetInnerHTML={{__html: question}}/>
<div>
    {answers.map(answer=>(
        <div key={answer}> 
            <button disabled={ !! userAnswer} value={answer }onClick={callback}>
                <span dangerouslySetInnerHTML={{__html :answer}} />
            </button>
        </div>
    ))}
</div>
</div>
);

export default QuestionCard;