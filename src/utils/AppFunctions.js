const initialSeparator = `********************\n`;
const finalSeparator = `\n********************\n`;
const teamSeparator = (title) => `------Team ${title}------\n`;

export const createMessage = (text, type) => {
  return {
    message: text,
    type,
  };
};

const copyToClip = (text) => {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand("copy") ? res("") : rej();
      textArea.remove();
    });
  }
};

const teamToString = (team, teamTitle) => {
  const teamText = team
    .map((player, index) => `${index + 1} - ${player.name}`)
    .join("\n");
  const text = teamSeparator(teamTitle)
    .concat(initialSeparator)
    .concat(teamText)
    .concat(finalSeparator);
  return text;
};

export const copyToClipBoardAllTeams = (teams, hasCaptain) => {
  const text = teams
    .map((team, index) =>
      teamToString(team, hasCaptain ? team[0].name : index + 1)
    )
    .join("\n");
  const message = copyToClip(text);
  return message;
};

export const copyToClipBoardSingleTeam = (team) => {
  const text = teamToString(team);
  copyToClip(text);
};
