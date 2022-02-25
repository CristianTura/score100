import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../actions/questions';
import { Button } from '../components/Button';


const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Dispatch action to get data from API
  useEffect(() => {
    dispatch( getQuestions() )
  }, [dispatch])
  
  const redirectTo = () => {
      navigate('/quiz')
  };
 
  return (
    <>
      <div className="home_backImage"></div>
      <div className='home__container animate__animated animate__fadeIn'>

        <h1>Welcome to the Trivia Challenge!</h1>
        <p className='home__info'>You will be presented with 10 True or False questions.</p>
        <p className='home__can100'>Can you score 100%?</p>
        <Button value='BEGIN' className='string' onClick={ redirectTo }/>
      </div>
    </>
  )
}

export default Home;