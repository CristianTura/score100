/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckAnswers from "../components/CheckAnswers";
import { Link } from "react-router-dom";

interface data {
  category: string;
  question: string;
  type: string;
  difficulty: string;
  correct_answer: string;
  id?: number;
  userAnswer?: string;
}

const Results = () => {
  const data = useSelector((state) => state.questions);

  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  useEffect(() => {
    countAnswers();
  }, [data]);

  // Check correct anwers and set the number of correct answers
  const countAnswers = () => {
    data.forEach(
      (question: {
        userAnswer: string ;
        correct_answer: string ;
      }) => {
        if (question.userAnswer === question.correct_answer) {
          setCorrectAnswer((c) => c + 1);
        }
      }
    );
  };
  

  return (
    <div className="results__container">
      <div className="results__title">
        <h1>ResultsPage</h1>
        <h1>{correctAnswer} / 10</h1>
      </div>

      <div className="results__answer animate__animated animate__pulse">
        {data?.map((item: data) => (
          <CheckAnswers key={item.id} {...item} />
        ))}
      </div>

      <Link to="/" className="results__again">
        PLAY AGAIN?
      </Link>
    </div>
  );
};

export default Results;
