import * as Actions from "./Players.types";

export function addPlayer(player) {
    return {
        type: Actions.ADD_PLAYER,
        player
    }
}

export function removePlayer(id) {
    return {
        type: Actions.REMOVE_PLAYER,
        id
    }
}

export function reset() {
    return {
        type: Actions.RESET_PLAYERS,
    }
}