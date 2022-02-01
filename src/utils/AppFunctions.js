const separator = `\n********************\n`;

export const createMessage = (text, type) => {
    return {
        message: text,
        type
    }
}

const copyToClip = (text) => {
    try {
        navigator.clipboard.writeText(text);
        return createMessage("Copiado com sucesso", "success");
    }
    catch (err) {
        return createMessage("Erro ao copiar", "error");
    }
}

const teamToString = (team) => {
    const teamText = team.map((player, index) => `${index + 1} - ${player.name}`).join('\n');
    const text = separator.concat(teamText).concat(separator);
    return text;
}

export const copyToClipBoardAllTeams = (teams) => {
    const text = teams.map(team => teamToString(team)).join('\n');
    const message = copyToClip(text);
    return message;
}

export const copyToClipBoardSingleTeam = (team) => {
    const text = teamToString(team);
    copyToClip(text);
}