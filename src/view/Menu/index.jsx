import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

import { setNumberOfTeams } from '../../store/Teams/Teams.actions';
import { invertCaptainsMode } from '../../store/Options/Options.actions';
import { reset } from '../../store/CaptainMode/CaptainMode.actions';
import { selectTeams } from '../../store/Teams/Teams.selectors';
import { selectPlayers } from '../../store/Players/Players.selectors';
import { selectOptions } from '../../store/Options/Options.selectors';

import { normalizeMaxMin } from '../../utils/IntegerFunctions';

import { Separator } from '../Commom/CommomStyles/index.styles';
import Buttons from '../Buttons';
import Checkbox from '../Commom/Checkbox';
import Input from '../Commom/Input';

import { StyledCheckboxes, StyledInputs, StyledLogo, StyledMenu } from './index.styles';

function Menu() {
    const dispatch = useDispatch();
    const { nTeams } = useSelector(selectTeams);
    const { nPlayers } = useSelector(selectPlayers);
    const { captainMode } = useSelector(selectOptions);

    const inputsOptions = [
        {
            id: 'teams',
            max: 20,
            min: 2,
            value: nTeams,
            setter: setNumberOfTeams,
            icon: faUsers,
        },
        {
            id: 'players',
            max: 400,
            min: 2,
            value: nPlayers,
            icon: faUser,
            disabled: true,
        },
    ];

    const checkboxesOptions = [
        {
            id: 'captains',
            value: captainMode,
            invert: invertCaptainsMode,
            text: 'Habilitar modo com capitães'
        },
    ];

    function handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        const inputOption = inputsOptions.find(input => input.id === id);
        const valueNormalized = normalizeMaxMin(value, inputOption.max, inputOption.min);
        dispatch(inputOption.setter(valueNormalized));
    }

    function handleClick(id) {
        const checkboxOption = checkboxesOptions.find(checkbox => checkbox.id === id);
        dispatch(checkboxOption.invert());
        dispatch(reset())
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
            <Separator base={8} color="#666" />
            <StyledCheckboxes>
                {checkboxesOptions.map(checkboxOption => (
                    <Checkbox
                        key={checkboxOption.id}
                        id={checkboxOption.id}
                        value={checkboxOption.value}
                        handleChange={handleClick}
                        text={checkboxOption.text}
                    />
                ))}
            </StyledCheckboxes>
            <Separator base={8} color="#666" />
            <Buttons />
        </StyledMenu>
    );
}

export default Menu;