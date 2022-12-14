import {shuffleArray} from './utils'

export type Question={
category:string;
correct_answer:string;
difficulty:string;
incorrect_answers:string[];
question:string;
type:string;
}

export type QuestionState= Question & {answers: string[]}
// use of enum 
export enum Difficulty {
    EASY ="easy",
    MEDIUM="mediun",
    HARD="hard",
}

export const fetchQuizQuestions = async(amout : number, difficulty :Difficulty) =>{


    //template literal
    const endpoint= `https://opentdb.com/api.php?amount=${amout}& difficulty=${difficulty}& type=multiple`;
    const data= await(await fetch(endpoint)).json();
    // console.log(data)

    return data.results.map((question: Question)=>(
        {
...question,
answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}