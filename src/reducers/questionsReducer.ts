import { types } from "../types/types";

interface IInitialState {
  category: string;
  questions: string;
  type: string;
  difficulty: string;
  correct_answer: string;
  id?: number;
  userAnswer?: string | null;
}

const initialState: IInitialState[] = [
  {
    category: "",
    questions: "",
    type: "",
    difficulty: "",
    correct_answer: "",
    id: 0,
    userAnswer: "",
  },
];

export const questionsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.questions:
      return action.payload; // return data of API

    case types.setAnswers:  // return answers of user
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, userAnswer: action.payload.answer }
          : item
      );

    default:
      return state;
  }
};
