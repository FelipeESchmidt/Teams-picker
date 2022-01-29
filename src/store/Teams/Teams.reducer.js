import * as Actions from "./Teams.types";

const defaultTeams = {
    teams: [],
    nTeams: 2,
}

export default function reducer(state = { ...defaultTeams }, action) {
    switch (action.type) {
        case Actions.SET_TEAMS:
            return { ...state, teams: action.teams };

        case Actions.SET_N_TEAMS:
            return { ...state, nTeams: action.nTeams };

        case Actions.RESET_TEAMS:
            return { ...defaultTeams };

        default:
            return state;
    }
}