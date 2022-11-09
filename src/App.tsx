import React, {useState} from 'react';
//components
import QuestionCard from './components/questioncard';
import { fetchQuizQuestions } from './API';

//types
import { QuestionState, Difficulty } from './API';

//styles
import { GlobleStyle } from './App.style';

export type AnswerObject={
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}
const TOTAL_QUESTIONS= 10;

const App=()=> {
const [loading, setLoading]=useState(false);
const[question, setQuestion]=useState<QuestionState[]>([]);
const [number, setnumber]=useState(0);
const[userAnswers, setUnserAnswers]=useState<AnswerObject[]>([]);
const [score,setScore]=useState(0);
const [gameOver,setGameOver]=useState(true);

// console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

// console.log(question)

  const startTrivia= async ()=>{
setLoading(true);
setGameOver(false);

const newQuestions= await fetchQuizQuestions(
  TOTAL_QUESTIONS,
  Difficulty.EASY
);

setQuestion(newQuestions);
setScore(0);
setUnserAnswers([]);
setnumber(0);
setLoading(false);
  }

  const checkAnswer=(e: React.MouseEvent<HTMLButtonElement>)=>{

    if(!gameOver){
      //useranswers
      const answer = e.currentTarget.value;

      //check answer against correct answer
      const correct= question[number].correct_answer=== answer;

      // add score if answer is correct
      if (correct) setScore(prev=>prev +1);

      // save answer in the array for the user answers
       const answerObject ={
        question: question[number].question,
        answer,
        correct,
        correctAnswer: question[number].correct_answer,
      };
      setUnserAnswers(prev=>[...prev, answerObject])

    }
  }


  const nextQuestion =()=>{
// move on to the next question if not the last question
const nextQuestion= number +1;

if(nextQuestion=== TOTAL_QUESTIONS ){
  setGameOver(true);
}else{
  setnumber(nextQuestion);
}
  }


  return (
    <>
    <GlobleStyle />
    <div className="App">
     <h1>REACT QUIZ</h1>

     {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
     <button className='start' onClick={startTrivia}>Start
     </button>): null}
    {! gameOver ? <p className='score'>Score:{score}</p> :null}
    {loading && <p >Loading Questions...</p> }

    {!loading && !gameOver && (
   <QuestionCard
   questionNo={number+1}
   totalquestions={TOTAL_QUESTIONS}
   question={question[number].question}
   answers={question[number].answers}
   userAnswer={userAnswers ? userAnswers[number]: undefined}
   callback={checkAnswer}
   />
    )}
    {!gameOver && !loading && userAnswers.length ===number +1 && number !==TOTAL_QUESTIONS -1 ?(

<button className='next' onClick={nextQuestion}>Next Question</button>
    ):null}

   
    </div>
    </>
  );
}

export default App;
