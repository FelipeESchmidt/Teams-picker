const initialSeparator = `********************\n`;
const finalSeparator = `\n********************\n`;
const teamSeparator = (title) => `------Team ${title}------\n`;

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

const teamToString = (team, teamTitle) => {
    const teamText = team.map((player, index) => `${index + 1} - ${player.name}`).join('\n');
    const text = teamSeparator(teamTitle).concat(initialSeparator).concat(teamText).concat(finalSeparator);
    return text;
}

export const copyToClipBoardAllTeams = (teams, hasCaptain) => {
    const text = teams.map((team, index) => teamToString(team, hasCaptain ? team[0].name : index + 1)).join('\n');
    const message = copyToClip(text);
    return message;
}

export const copyToClipBoardSingleTeam = (team) => {
    const text = teamToString(team);
    copyToClip(text);
}