const initialSeparator = `********************\n`;
const finalSeparator = `\n********************\n`;
const teamSeparator = (number) => `------Team ${number + 1}------\n`;

export const createMessage = (text, type) => {
    return {
        message: text,
        type
    }
}

const copyToClip = (text) => {
    navigator.clipboard.writeText(text);
}

const teamToString = (team, teamNumber) => {
    const teamText = team.map((player, index) => `${index + 1} - ${player.name}`).join('\n');
    const text = teamSeparator(teamNumber).concat(initialSeparator).concat(teamText).concat(finalSeparator);
    return text;
}

export const copyToClipBoardAllTeams = (teams) => {
    const text = teams.map((team, index) => teamToString(team, index)).join('\n');
    copyToClip(text);
}

export const copyToClipBoardSingleTeam = (team) => {
    const text = teamToString(team);
    copyToClip(text);
}