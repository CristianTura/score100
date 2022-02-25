import React from 'react'

interface data {
    category: string,
    question: string,
    type: string,
    difficulty: string,
    correct_answer: string,
    id?: number,
    userAnswer?: string,
}

const CheckAnswers = ({question, correct_answer, userAnswer}: data) => {


    return (
        
        <p><span>{ correct_answer === userAnswer ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}</span>
        {question}</p>
     
    )
}

export default CheckAnswers;