import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import QuestionsPage from '../pages/QuestionsPage';
import ResultsPage from '../pages/ResultsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <HomePage /> } />
        <Route path='/quiz' element={ <QuestionsPage />} />
        <Route path='/results' element={ <ResultsPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter