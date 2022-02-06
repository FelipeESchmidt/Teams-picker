import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faBlind } from '@fortawesome/free-solid-svg-icons';

import { addPlayer } from '../../store/Players/Players.actions';
import { createPlayer, normalizeNames } from '../../utils/PlayerFunctions';

import Players from '../Players';

import { StyledInput, StyledWrapper } from './index.styles';
import { ENTER_KEY, placeholder } from './index.constants';

function PlayersPointer() {
    const dispatch = useDispatch();
    const [playersName, setPlayersName] = useState('');

    const createAddAndResetPlayer = (name) => {
        const newPlayer = createPlayer(name);
        dispatch(addPlayer(newPlayer));
        setPlayersName('');
    }

    const handleChange = (event) => {
        const names = event.target.value;
        const namesNormalized = normalizeNames(names, '£');
        if (namesNormalized.includes('£')) {
            const name = namesNormalized.substring(0, namesNormalized.length - 1);
            createAddAndResetPlayer(name);
            return;
        }
        setPlayersName(namesNormalized);
    }

    const handleEnter = (event) => {
        if (event.keyCode === ENTER_KEY && playersName) {
            createAddAndResetPlayer(playersName);
        }
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
                icon={inputOption.icon}
                placeholder={placeholder}
                autoComplete="off"
                handleChange={handleChange}
                onKeyUp={handleEnter}
            />
            <Players />
        </StyledWrapper>
    );
}

export default PlayersPointer;