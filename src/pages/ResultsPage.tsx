import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CheckAnswers from '../components/CheckAnswers';
import { Link } from 'react-router-dom';

interface data {
  category: string,
  question: string,
  type: string,
  difficulty: string,
  correct_answer: string,
  id?: number,
  userAnswer?: string,
}

const ResultsPage = () => {

  const data = useSelector(state => state.questions);

  const [correctAnswer, setCorrectAnswer] = useState(0);


  useEffect(() => {
    const countAnswers = () => {
      data.map( (question: { userAnswer: string | undefined; correct_answer: string | undefined; }) => {
        if ( question.userAnswer === question.correct_answer ) {
          setCorrectAnswer( c => c + 1 );
        }
        return 'ok';
      })
    };
    
    countAnswers()
  }, [data])

  
  

  return (
    <div className='results__container'>
      <div className="results__title">
        <h1>ResultsPage</h1>
        <h1>{correctAnswer} / 10</h1>
      </div>
      
      <div className='results__answer'>
        {data?.map( (item: data)  => (
          <CheckAnswers  key={item.id} {...item}/>
        ))}
      </div>

      <Link to='/' className='results__again'>PLAY AGAIN?</Link>
    </div>
  )
}

export default ResultsPage;

