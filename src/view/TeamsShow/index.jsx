import React from 'react';
import { useSelector } from 'react-redux';

import { selectOptions } from '../../store/Options/Options.selectors';

import CaptainTeams from '../CaptainTeams';
import Teams from '../Teams';

import { StyledWrapper } from './index.styles';

function TeamsShow() {
    const { captainMode } = useSelector(selectOptions);

    if (captainMode) {
        return (
            <StyledWrapper>
                <CaptainTeams />
            </StyledWrapper>
        );
    }

    return (
        <StyledWrapper>
            <Teams />
        </StyledWrapper>
    );
}

export default TeamsShow;