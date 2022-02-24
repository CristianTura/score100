import { types } from "../types/types";

const initialState: any[] = []

export const answerReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case types.setAnswers:
            return []

        default:
            return state;

    }

}