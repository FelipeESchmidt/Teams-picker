import { SET_TEAMS_SETTED, RESET_TEAMS_SETTED } from "./App.types";

const defaultAlert = {
    teamsSetted: false,
}

export default function reducer(state = defaultAlert, action) {
    switch (action.type) {
        case SET_TEAMS_SETTED:
            return { ...state, teamsSetted: true };

        case RESET_TEAMS_SETTED:
            return { ...state, teamsSetted: false };

        default:
            return state;
    }
}