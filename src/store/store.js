import { createStore, combineReducers } from 'redux';

import numbersReducer from './Numbers/Numbers.reducer';

const rootReducer = combineReducers({
    numbers: numbersReducer
});

export const store = createStore(rootReducer);