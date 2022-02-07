import React from 'react';
import { useSelector } from 'react-redux';

import { selectApp } from '../../store/App/App.selectors';

import AlertMessage from '../Commom/AlertMessage';
import Menu from '../Menu';
import PlayersPointer from '../PlayersPointer';
import TeamsShow from '../TeamsShow';

import { StyledSite } from './indes.styles';

function Main() {
    const { teamsSetted } = useSelector(selectApp);

    return (
        <StyledSite>
            <AlertMessage />
            <Menu />
            {teamsSetted
                ? <TeamsShow />
                : <PlayersPointer />
            }
        </StyledSite>
    );
}

export default Main;