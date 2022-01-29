import * as Actions from "./Teams.types";

export function setNumberOfTeams(nTeams) {
    return {
        type: Actions.SET_N_TEAMS,
        nTeams
    }
}

export function setTeams(teams) {
    return {
        type: Actions.SET_TEAMS,
        teams
    }
}

export function reset() {
    return {
        type: Actions.RESET_TEAMS,
    }
}