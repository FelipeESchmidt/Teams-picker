import React from 'react';

import AlertMessage from '../Commom/AlertMessage';
import Menu from '../Menu';
import TeamsCreator from '../TeamsCreator';

import { StyledSite } from './indes.styles';

function Main() {
    return (
        <StyledSite>
            <AlertMessage />
            <Menu />
            <TeamsCreator />
        </StyledSite>
    );
}

export default Main;