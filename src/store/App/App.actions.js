import { SET_TEAMS_SETTED, RESET_TEAMS_SETTED } from "./App.types";

export function teamsSetted() {
    return {
        type: SET_TEAMS_SETTED,
    }
}

export function resetTeamsSetted() {
    return {
        type: RESET_TEAMS_SETTED,
    }
}