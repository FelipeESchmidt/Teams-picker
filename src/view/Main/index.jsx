import React from 'react';

import Menu from '../Menu';
import TeamsCreator from '../TeamsCreator';

import { StyledSite } from './indes.styles';

function Main() {
    return (
        <StyledSite>
            <Menu />
            <TeamsCreator />
        </StyledSite>
    );
}

export default Main;