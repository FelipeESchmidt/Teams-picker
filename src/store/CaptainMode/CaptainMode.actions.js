import { SELECT_CAPTAIN, START_SELECTION, SELECT_PLAYER, SELECTION_FINISHED, RESET } from "./CaptainMode.types";

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

export function finalizeSelections() {
    return {
        type: SELECTION_FINISHED,
    }
}

export function reset() {
    return {
        type: RESET,
    }
}