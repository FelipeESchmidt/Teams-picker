import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import { setPlayers, setTeams } from '../../store/Numbers/Numbers.actions';
import { selectNumbers } from '../../store/Numbers/Numbers.selectors';

import { normalizeMaxMin } from '../../utils/IntegerFunctions';

import Input from '../Commom/Input';
import { StyledInputs, StyledLogo, StyledMenu } from './index.styles';
import { Separator } from '../Commom/CommomStyles/index.styles';

function Menu() {
    const dispatch = useDispatch();
    const { players, teams } = useSelector(selectNumbers);

    const inputsOptions = [
        {
            id: 'teams',
            max: 20,
            min: 2,
            value: teams,
            setter: setTeams,
            icon: faUsers,
        },
        {
            id: 'players',
            max: 400,
            min: 2,
            value: players,
            setter: setPlayers,
            icon: faUser,
            disabled: true,
        },
    ];

    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        const inputOption = inputsOptions.find(input => input.id === id);
        const valueNormalized = normalizeMaxMin(value, inputOption.max, inputOption.min);
        dispatch(inputOption.setter(valueNormalized));
    }

    return (
        <StyledMenu>
            <StyledLogo>
                Teams Picker
            </StyledLogo>
            <Separator base={8} color="#666" />
            <StyledInputs>
                {inputsOptions.map(inputOption => (
                    <Input
                        key={inputOption.id}
                        id={inputOption.id}
                        type="number"
                        value={inputOption.value}
                        handleChange={handleChange}
                        icon={inputOption.icon}
                        max={inputOption.max}
                        min={inputOption.min}
                        disabled={inputOption.disabled}
                    />
                ))}
            </StyledInputs>
        </StyledMenu>
    );
}

export default Menu;