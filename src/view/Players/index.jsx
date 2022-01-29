import React from 'react';

import Player from './Player';
import { StyledWrapper } from './index.styles';

function Players({ players }) {
    return (
        <StyledWrapper>
            {players.map(player => (
                <Player key={player.id} {...player} />
            ))}
        </StyledWrapper>
    );
}

export default Players;