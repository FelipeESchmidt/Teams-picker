import { createMessage } from "./AppFunctions"

const errors = {
    "playersAreGood": "Houve algum erro na geração dos times",
    "nPlayersBiggerThanTeams": "Número de jogadores precisa ser maior que o número de times",
    "nPlayersAreDivisibleByTeams": "Número de jogadores precisa ser múltiplo do número de times",
}

export const verifyErrors = (players, nPlayers, nTeams) => {
    const validations = [{
        id: "playersAreGood",
        error: !(players.every(player => player.id && player.name))
    }, {
        id: "nPlayersBiggerThanTeams",
        error: !(nPlayers >= nTeams)
    }, {
        id: "nPlayersAreDivisibleByTeams",
        error: !(nPlayers % nTeams === 0)
    }];

    const hasError = validations.reduce((acumulador, valorAtual) => acumulador || valorAtual.error, false);

    if (!hasError) return

    const arrErrors = validations.map(validation => validation.error ? errors[validation.id] : "");
    const errorMessage = arrErrors.filter(err => !!err).join('\n');
    return createMessage(errorMessage, "error");
}

const mixPlayers = (players) => {
    const receivedPlayers = [ ...players ];
    const playersMixed = [];
    for (let i = receivedPlayers.length; i > 0; i--) {
        playersMixed.push(receivedPlayers.splice(Math.floor(Math.random() * i), 1)[0]);
    }
    return playersMixed;
}

const setRandomIdToPlayers = (players) => {
    return players.map((player, index) => { return { ...player, index } });
}

export const generateTeams = (players, nTeams) => {
    const teams = [];
    const playersPerTeam = players.length / nTeams;

    const playersSorted = mixPlayers(setRandomIdToPlayers(players));

    for(let i = 0; i < nTeams; i++){
        teams.push(playersSorted.splice(0, playersPerTeam));
    }

    return teams;
}