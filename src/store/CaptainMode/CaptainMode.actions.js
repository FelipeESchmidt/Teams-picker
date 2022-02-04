import { SELECT_CAPTAIN, START_SELECTION, SELECT_PLAYER } from "./CaptainMode.types";

export function startCaptainsSelection(players, nTeams) {
    return {
        type: START_SELECTION,
        players,
        nTeams,
    }
}

export function selectCaptain(captainId) {
    return {
        type: SELECT_CAPTAIN,
        captainId
    }
}

export function selectPlayer(playerId) {
    return {
        type: SELECT_PLAYER,
        playerId
    }
}