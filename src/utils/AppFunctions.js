const separator = `\n********************\n`;

export const createMessage = (text, type) => {
    return {
        message: text,
        type
    }
}

const copyToClip = (text) => {
    navigator.clipboard.writeText(text);
}

const teamToString = (team) => {
    const teamText = team.map((player, index) => `${index + 1} - ${player.name}`).join('\n');
    const text = separator.concat(teamText).concat(separator);
    return text;
}

export const copyToClipBoardAllTeams = (teams) => {
    const text = teams.map(team => teamToString(team)).join('\n');
    copyToClip(text);
}

export const copyToClipBoardSingleTeam = (team) => {
    const text = teamToString(team);
    copyToClip(text);
}