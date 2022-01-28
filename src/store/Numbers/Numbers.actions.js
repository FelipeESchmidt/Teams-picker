import * as Actions from "./Numbers.types";

export function setPlayers(players) {
    return {
        type: Actions.SET_PLAYERS,
        players
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
        type: Actions.RESET_VALUES,
    }
}