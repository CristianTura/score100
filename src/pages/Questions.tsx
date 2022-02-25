import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAnswer } from "../actions/questions";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";

const Questions = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.questions);

  const question = data[count];

  // Dispatch action to set the answer of user and show next question
  const sendAnswer = (response: string) => {
    dispatch(setAnswer(question.id, response));

    if (count < data.length - 1) {
      setCount(count + 1);
    } else {
      navigate("/results");
    }
  };

  // Function to go forward or backward of the answered questions 
  const handleQuestionNumber = (number: number) => {
    setCount(count + number);
  };

  // To disabled the button if the question is not answered
  const isDisabledNext = () => {
    if (count === data.length - 1) {
      return true;
    } else if (!question.userAnswer) {
      return true;
    } else {
      return false;
    }
  };

  const isDisabledPrev = () => {
    if (count === 0) {
      return true;
    }
  };

  return (
    <>
      <div className="question__backImage"></div>
      <div className="question__container ">
        <h1>{question?.category}</h1>

        <ProgressBar value={count * 10} className="quiestion__progress" />

        <div className="question__card animate__animated animate__pulse">
          <p>{question?.question}</p>
          <div className="question__btn-answer">
            <Button
              value="False"
              className="btn-false"
              onClick={() => sendAnswer("False")}
            />
            <Button
              value="True"
              className="btn-true"
              onClick={() => sendAnswer("True")}
            />
          </div>
        </div>

        <div className="question__btn-NextPrev">
          <button
            className={isDisabledPrev() ? "btn-disabled" : "btn"}
            disabled={isDisabledPrev()}
            onClick={() => handleQuestionNumber(-1)}
          >
            <i className="fa-solid fa-angles-left" /> Prev
          </button>
          <p>{question?.id} of 10</p>
          <button
            className={isDisabledNext() ? "btn-disabled" : "btn"}
            disabled={isDisabledNext()}
            onClick={() => handleQuestionNumber(1)}
          >
            Next <i className="fa-solid fa-angles-right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Questions;
