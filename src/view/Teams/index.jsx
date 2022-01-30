import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faPeopleCarry, faCopy } from '@fortawesome/free-solid-svg-icons';

import { newMessage } from '../../store/Alert/Alert.actions';
import { selectTeams } from '../../store/Teams/Teams.selectors';

import { copyToClipBoardAllTeams, createMessage } from '../../utils/AppFunctions';

import Team from './Team';
import { StyledIcon, StyledTitle, StyledTopWrapper, StyledWrapper } from './index.styles';
import { Separator } from '../Commom/CommomStyles/index.styles';

function Teams() {
    const dispatch = useDispatch();

    const { teams } = useSelector(selectTeams);

    const handleCopyAll = () => {
        copyToClipBoardAllTeams(teams);
        const alert = createMessage("Copiado com sucesso", "success");
        dispatch(newMessage(alert));
    }

    const hasTeams = !!teams.length;
    if (!hasTeams) return null;

    return (
        <>
            <Separator base={8} color="#666" />
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