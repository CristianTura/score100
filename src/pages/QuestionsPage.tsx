import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAnswer } from '../actions/questions';


const QuestionsPage = () => {

  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state => state.questions);

  const question = data[count]

  const sendAnswer = ( response: string ) => {
    dispatch( setAnswer( question.id, response ) );

    if ( count < data.length - 1 ) {
      setCount( count + 1 );
    } else {
      navigate('/results');
    }
  }

  const handleQuestionNumber = ( number: number ) => {
      setCount( count + number );
  }

  const isDisabledNext = () => {
    if ( count === data.length - 1 ) {
      return true;
    } else if ( question.userAnswer === null ) {
      return true;
    } else {
      return false;
    }
  }

  const isDisabledPrev= () => {
    if ( count === 0 ) {
      return true;
    } 
  }

  return (
    <div className='question__container'>

      <h1>{question?.category}</h1>

      <div className='question__card'>
        <p>{question?.question}</p>
        <div className='question__btn-answer'>
          <button className='pointer' onClick={() => sendAnswer('True')} >True</button>
          <button className='pointer' onClick={() => sendAnswer('False')}>False</button>  
        </div>
      </div>

      <div className='question__btn-NextPrev'>
        <button className='pointer' disabled={ isDisabledPrev() } onClick={ () => handleQuestionNumber( -1 ) }>Prev</button>
        <p>{question?.id} of 10</p>
        <button className='pointer' disabled={ isDisabledNext()} onClick={ () => handleQuestionNumber( 1 ) } >Next</button>
      </div>


    </div>
  )
}

export default QuestionsPage;