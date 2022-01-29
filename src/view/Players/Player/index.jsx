import React from 'react';
import { useDispatch } from 'react-redux';

import { removePlayer } from '../../../store/Players/Players.actions';

import { Remove, StyledCard } from './index.styles';

function Player({ id, name }) {
    const dispatch = useDispatch();

    const handleRemovePlayer = () => {
        dispatch(removePlayer(id));
    }

    return (
        <StyledCard>
            {name}
            <Remove onClick={handleRemovePlayer}>x</Remove>
        </StyledCard>
    );
}

export default Player;