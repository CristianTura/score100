import { types } from "../types/types";


export const getQuestions = () => {
    return async (dispatch: any) => {

        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
        const data = await response.json();
        dispatch({
            type: types.questions,
            payload: data.results.map((item: object, index:number) => ({
                ...item,
                id: index + 1,
                userAnswer: null
            }))
        })
        
    }
};

export const setAnswer = (id: number, answer: string) => {
    return {
        type: types.setAnswers,
        payload: {
            id,
            answer
        }
    }
}