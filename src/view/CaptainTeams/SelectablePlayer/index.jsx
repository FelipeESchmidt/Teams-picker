import React from 'react';

import { StyledPlayer } from './index.styles';

function SelectablePlayer({ player, onSelect }) {
    const selectPlayer = () => onSelect(player.id);

    return (
        <StyledPlayer onClick={selectPlayer}>
            <p>{player.name}</p>
        </StyledPlayer>
    );
}

export default SelectablePlayer;