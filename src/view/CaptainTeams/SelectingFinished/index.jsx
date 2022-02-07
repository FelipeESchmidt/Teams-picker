import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { newMessage } from '../../../store/Alert/Alert.actions';
import { setTeams } from '../../../store/Teams/Teams.actions';
import { selectCaptainMode } from '../../../store/CaptainMode/CaptainMode.selectors';

import { finalizeSelections } from '../../../store/CaptainMode/CaptainMode.actions';
import { createMessage } from '../../../utils/AppFunctions';

import Teams from '../../Teams';
import { StyledWrapper } from './index.styles';

function SelectingFinished() {
    const [first, setFirst] = useState(true);
    const dispatch = useDispatch();

    const { teams } = useSelector(selectCaptainMode);

    useEffect(() => {
        if (!first) return;
        dispatch(setTeams(teams));
        const success = createMessage("Seleções finalizadas com sucesso!", "info");
        dispatch(newMessage(success));
        dispatch(finalizeSelections());
        setFirst(false);
    }, [dispatch, teams, first]);

    return (
        <StyledWrapper>
            <Teams />
        </StyledWrapper>
    );
}

export default SelectingFinished;