import { combineReducers } from "redux";
import { answerReducer } from "./answersReducer";

export const rootReducer = combineReducers({
    answers: answerReducer,
})