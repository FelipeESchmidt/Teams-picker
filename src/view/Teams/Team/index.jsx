import React from 'react';

import { StyledPlayer, StyledTeam } from './index.styles';

function Team({ team }) {
    return (
        <StyledTeam>
            {team.map(player => (
                <StyledPlayer key={player.id}>
                    {player.name}
                </StyledPlayer>
            ))}
        </StyledTeam>
    );
}

export default Team;