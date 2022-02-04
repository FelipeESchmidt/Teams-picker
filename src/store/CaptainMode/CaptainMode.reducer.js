import { SELECT_CAPTAIN, SELECT_PLAYER, START_SELECTION } from './CaptainMode.types';

const defaultAlert = {
    nTeams: 0,
    availablePlayers: [],
    indexControl: 0,
    selectingCaptains: false,
    teams: [],
}

export default function reducer(state = defaultAlert, action) {
    switch (action.type) {
        case START_SELECTION:
            return { ...state, nTeams: action.nTeams, availablePlayers: [...action.players], selectingCaptains: true };

        case SELECT_CAPTAIN:
            return { ...state, open: false };

        case SELECT_PLAYER:
            return { ...state, open: false };

        default:
            return state;
    }
}