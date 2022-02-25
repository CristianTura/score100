import axios from "axios";
import { types } from "../types/types";


// Get Data of API
export const getQuestions = () => {
  return async (dispatch: any) => {
    const url =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

    const {
      data: { results },
    } = await axios(url);

    dispatch({
      type: types.questions,
      payload: results.map((item: object, index: number) => ({
        ...item,
        id: index + 1,
        userAnswer: "",
      })),
    });
  };
};

// Send answer of user
export const setAnswer = (id: number, answer: string) => {
  return {
    type: types.setAnswers,
    payload: {
      id,
      answer,
    },
  };
};
