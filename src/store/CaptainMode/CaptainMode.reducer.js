import { SELECT_CAPTAIN, SELECT_PLAYER, START_SELECTION, SELECTION_FINISHED, RESET } from './CaptainMode.types';

const createTeamsArray = (nTeams) => {
    const array = [];
    for (let i = 0; i < nTeams; i++) {
        array.push([]);
    }
    return array;
}

const findPlayerById = (players, id) => {
    return players.find((player) => player.id === id);
}

const getPlayerIndex = (players, player) => {
    return players.indexOf(player);
}

const nextIndexTeam = ({ nTeams, indexControl }) => {
    let nextIndex = indexControl + 1;
    if (nextIndex === nTeams) nextIndex = 0
    return nextIndex;
}

const addPlayerToTeam = ({ teams, indexControl, player }) => {
    teams[indexControl].push(player);
    return teams;
}

const defaultInfo = {
    nTeams: 0,
    availablePlayers: [],
    indexControl: 0,
    teams: [],
}

export default function reducer(state = { ...defaultInfo }, action) {
    switch (action.type) {
        case START_SELECTION:
            return {
                ...state,
                nTeams: action.nTeams,
                availablePlayers: [...action.players],
                teams: createTeamsArray(action.nTeams),
            };

        case SELECT_CAPTAIN: {
            const availablePlayers = [...state.availablePlayers];
            const captainSelected = findPlayerById(availablePlayers, action.captainId);
            const indexOfPlayer = getPlayerIndex(availablePlayers, captainSelected);
            availablePlayers.splice(indexOfPlayer, 1);
            const teams = addPlayerToTeam({ ...state, player: captainSelected });
            return {
                ...state,
                availablePlayers,
                teams,
                indexControl: nextIndexTeam(state),
            };
        }

        case SELECT_PLAYER: {
            const availablePlayers = [...state.availablePlayers];
            const playerSelected = findPlayerById(availablePlayers, action.playerId);
            const indexOfPlayer = getPlayerIndex(availablePlayers, playerSelected);
            availablePlayers.splice(indexOfPlayer, 1);
            const teams = addPlayerToTeam({ ...state, player: playerSelected });
            return {
                ...state,
                availablePlayers,
                teams,
                indexControl: nextIndexTeam(state),
            };
        }

        case SELECTION_FINISHED:
            return { ...defaultInfo };

        case RESET:
            return {
                ...defaultInfo,
                nTeams: state.nTeams,
                availablePlayers: state.availablePlayers,
                indexControl: 0,
                teams: createTeamsArray(state.nTeams),
            };


        default:
            return state;
    }
}