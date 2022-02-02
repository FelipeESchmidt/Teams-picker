import { createStore, combineReducers } from 'redux';

import teamsReducer from './Teams/Teams.reducer';
import playersReducer from './Players/Players.reducer';
import alertReducer from './Alert/Alert.reducer';
import optionsReducer from './Options/Options.reducer';

const rootReducer = combineReducers({
    teams: teamsReducer,
    players: playersReducer,
    alert: alertReducer,
    options: optionsReducer,
});

export const store = createStore(rootReducer);