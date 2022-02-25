import React from "react";

interface ICheckAnswersProps {
  category: string;
  question: string;
  type: string;
  difficulty: string;
  correct_answer: string;
  id?: number;
  userAnswer?: string;
}

//Component for displaying the answers of the questions
const CheckAnswers: React.FC<ICheckAnswersProps> = ({
  question = "",
  correct_answer = "",
  userAnswer = "",
}) => {
  return (
    <p>
      <span>
        <i
          className={`fa-solid ${
            correct_answer === userAnswer ? "fa-check" : "fa-xmark"
          }`}
        />
      </span>
      {question}
    </p>
  );
};

export default CheckAnswers;
