import React from 'react';
import { useSelector } from 'react-redux';

import { selectPlayers } from '../../store/Players/Players.selectors';

import Player from './Player';
import { StyledWrapper } from './index.styles';

function Players() {
    const { players } = useSelector(selectPlayers);

    return (
        <StyledWrapper>
            {players.map(player => (
                <Player key={player.id} {...player} />
            ))}
        </StyledWrapper>
    );
}

export default Players;