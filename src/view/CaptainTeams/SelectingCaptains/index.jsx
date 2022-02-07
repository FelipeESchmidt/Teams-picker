import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCaptain } from '../../../store/CaptainMode/CaptainMode.actions';
import { selectCaptainMode } from '../../../store/CaptainMode/CaptainMode.selectors';
import CaptainsContext from '../../../context/CaptainsContext';

import SelectablePlayer from '../SelectablePlayer';

import { StyledCaptains, StyledPlayers, StyledWrapper } from './index.styles';

function SelectingCaptains() {
    const dispatch = useDispatch();

    const { availablePlayers, nTeams } = useSelector(selectCaptainMode);

    const [captains, setCaptains] = useState(nTeams);
    const { nextStep } = useContext(CaptainsContext);

    const handleSelectCaptain = (id) => {
        dispatch(selectCaptain(id));
        if (captains > 1) {
            setCaptains(captains - 1);
        } else {
            nextStep();
        }
    }

    return (
        <StyledWrapper>
            <StyledCaptains>Selecione mais {captains} {captains !== 1 ? 'capitães' : 'capitão'}</StyledCaptains>
            <StyledPlayers>
                {availablePlayers.map((player) => (
                    <SelectablePlayer key={player.id} player={player} onSelect={handleSelectCaptain} />
                ))}
            </StyledPlayers>
        </StyledWrapper>
    );
}

export default SelectingCaptains;