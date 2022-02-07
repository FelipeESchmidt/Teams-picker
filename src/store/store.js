import { createStore, combineReducers } from 'redux';

import appReducer from './App/App.reducer';
import teamsReducer from './Teams/Teams.reducer';
import playersReducer from './Players/Players.reducer';
import alertReducer from './Alert/Alert.reducer';
import optionsReducer from './Options/Options.reducer';
import captainModeReducer from './CaptainMode/CaptainMode.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    teams: teamsReducer,
    players: playersReducer,
    alert: alertReducer,
    options: optionsReducer,
    captainMode: captainModeReducer,
});

export const store = createStore(rootReducer);