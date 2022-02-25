import { types } from "../types/types";

interface data {
    category: string,
    questions: string,
    type: string,
    difficulty: string,
    correct_answer: any[],
    id?: number,
    userAnswer?: string | null,
}

const initialState = [
    {category: "",
    questions: "",
    type: "",
    difficulty: "",
    correct_answer: [],
    id: 0,
    userAnswer: null}
]

export const questionsReducer = (state = initialState,  action: any) => {
    
        switch (action.type) {
    
            case types.questions:
                return action.payload

            case types.setAnswers:
                return  state.map( item => item.id === action.payload.id 
                                                ? {...item, userAnswer: action.payload.answer} 
                                                : item)
                
            default:
                return state;
    
        }
    
};