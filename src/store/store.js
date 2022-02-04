import { createStore, combineReducers } from 'redux';

import teamsReducer from './Teams/Teams.reducer';
import playersReducer from './Players/Players.reducer';
import alertReducer from './Alert/Alert.reducer';
import optionsReducer from './Options/Options.reducer';
import captainModeReducer from './CaptainMode/CaptainMode.reducer';

const rootReducer = combineReducers({
    teams: teamsReducer,
    players: playersReducer,
    alert: alertReducer,
    options: optionsReducer,
    captainMode: captainModeReducer,
});

export const store = createStore(rootReducer);