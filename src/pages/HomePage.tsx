import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQuestions } from '../actions/questions';

const HomePage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getQuestions() )
  }, [dispatch])
  
 
  return (
    <div className='home__container'>

      <h1>Welcome to the Trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <button className='home__btn'>
        <Link className='link' to={'/quiz'}>BEGIN</Link>
      </button>

    </div>
  )
}

export default HomePage;