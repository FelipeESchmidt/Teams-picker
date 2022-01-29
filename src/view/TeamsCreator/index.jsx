import React, { useState } from 'react';
import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { addPlayer } from '../../store/Players/Players.actions';
import { selectPlayers } from '../../store/Players/Players.selectors';
import { createPlayer, normalizeNames } from '../../utils/PlayerFunctions';

import Players from '../Players';

import { StyledInput, StyledWrapper } from './index.styles';
import { placeholder } from './index.constants';
import { useDispatch, useSelector } from 'react-redux';

function TeamsCreator() {
    const dispatch = useDispatch();
    const { players } = useSelector(selectPlayers);

    const [playersName, setPlayersName] = useState('');

    const handleChange = (event) => {
        const names = event.target.value;
        const namesNormalized = normalizeNames(names, '£');
        if (namesNormalized.includes('£')) {
            const name = namesNormalized.substring(0, namesNormalized.length - 1);
            const newPlayer = createPlayer(name);
            dispatch(addPlayer(newPlayer));
            setPlayersName('');
            return;
        }
        setPlayersName(namesNormalized);
    }

    const inputOption = {
        id: 'jogadores',
        value: playersName,
        setter: handleChange,
        icon: faBlind,
    };

    return (
        <StyledWrapper>
            <StyledInput
                key={inputOption.id}
                id={inputOption.id}
                type="text"
                value={inputOption.value}
                handleChange={handleChange}
                icon={inputOption.icon}
                placeholder={placeholder}
                autoComplete="off"
            />
            <Players players={players} />
        </StyledWrapper>
    );
}

export default TeamsCreator;