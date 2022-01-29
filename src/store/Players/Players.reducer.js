import * as Actions from "./Players.types";

const defaultPlayers = {
    players: [],
    nPlayers: 0,
}

export default function reducer(state = { ...defaultPlayers }, action) {
    switch (action.type) {
        case Actions.ADD_PLAYER:
            return { 
                ...state,
                players: [ ...state.players, action.player ],
                nPlayers: state.nPlayers + 1,
            };

        case Actions.REMOVE_PLAYER:
            return { 
                ...state,
                players: [ ...state.players ].filter(player => player.id !== action.id),
                nPlayers: state.nPlayers - 1,
            };

        case Actions.RESET_PLAYERS:
            return { ...defaultPlayers };

        default:
            return state;
    }
}