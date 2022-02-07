import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CaptainsContext from '../../../context/CaptainsContext';
import { selectPlayer } from '../../../store/CaptainMode/CaptainMode.actions';
import { selectCaptainMode } from '../../../store/CaptainMode/CaptainMode.selectors';

import SelectablePlayer from '../SelectablePlayer';

import { StyledCaptain, StyledCaptainName, StyledPlayers, StyledWrapper } from './index.styles';

function SelectingPlayers() {
    const dispatch = useDispatch();

    const { availablePlayers, teams, indexControl } = useSelector(selectCaptainMode);

    const { nextStep } = useContext(CaptainsContext);

    const handleSelectPlayer = (id) => {
        dispatch(selectPlayer(id));
        if (availablePlayers.length === 1) {
            nextStep();
        }
    }

    return (
        <StyledWrapper>
            <StyledCaptain>
                Vez de:&nbsp;
                <StyledCaptainName>
                    {teams[indexControl][0].name}
                </StyledCaptainName>
            </StyledCaptain>
            <StyledPlayers>
                {availablePlayers.map((player) => (
                    <SelectablePlayer key={player.id} player={player} onSelect={handleSelectPlayer} />
                ))}
            </StyledPlayers>
        </StyledWrapper>
    );
}

export default SelectingPlayers;