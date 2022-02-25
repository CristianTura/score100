import 'react-redux';
import { AppState } from '../reducers/rootReducer';

export const types = {

    questions: '[data] Get question Data',

    setAnswers: '[data] Check Answer',

    restartQuiz: '[restart] Restart Quiz',

}

declare module 'react-redux' {
    interface DefaultRootState extends AppState { }
  }