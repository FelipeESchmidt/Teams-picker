import * as Actions from "./Numbers.types";

const defaultNumbers = {
    players: 0,
    teams: 2
}

export default function reducer(state = { ...defaultNumbers }, action) {
    switch (action.type) {
        case Actions.SET_PLAYERS:
            return { ...state, players: action.players};

        case Actions.SET_TEAMS:
            return { ...state, teams: action.teams };

        case Actions.RESET_VALUES:
            return { ...defaultNumbers };

        default:
            return state;
    }
}