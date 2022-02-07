import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faPeopleCarry, faCopy } from '@fortawesome/free-solid-svg-icons';

import { newMessage } from '../../store/Alert/Alert.actions';
import { selectTeams } from '../../store/Teams/Teams.selectors';

import { copyToClipBoardAllTeams } from '../../utils/AppFunctions';

import Team from './Team';
import { StyledIcon, StyledTitle, StyledTopWrapper, StyledWrapper } from './index.styles';
import { Separator } from '../Commom/CommomStyles/index.styles';

function Teams() {
    const dispatch = useDispatch();

    const { teams } = useSelector(selectTeams);

    const handleCopyAll = () => {
        const message = copyToClipBoardAllTeams(teams);
        dispatch(newMessage(message));
    }

    const hasTeams = !!teams.length;
    if (!hasTeams) return null;

    return (
        <>
            <StyledTopWrapper>
                <StyledTitle>
                    <StyledIcon icon={faPeopleCarry} />
                    Teams
                </StyledTitle>
                <StyledTitle>
                    <StyledIcon icon={faCopy} onClick={handleCopyAll} style={{ cursor: "pointer" }} />
                </StyledTitle>
            </StyledTopWrapper>
            <Separator base={2} color="none" />
            <StyledWrapper>
                {teams.map((team, index) => (
                    <Team key={index} team={team} />
                ))}
            </StyledWrapper>
        </>
    );
}

export default Teams;