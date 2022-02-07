import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetTeamsSetted, teamsSetted } from '../../store/App/App.actions';
import { selectPlayers } from '../../store/Players/Players.selectors';
import { selectTeams } from '../../store/Teams/Teams.selectors';
import { selectOptions } from '../../store/Options/Options.selectors';
import { startCaptainsSelection } from '../../store/CaptainMode/CaptainMode.actions';
import { reset, setTeams } from '../../store/Teams/Teams.actions';
import { newMessage } from '../../store/Alert/Alert.actions';

import { createMessage } from '../../utils/AppFunctions';
import { generateTeams, verifyErrors } from '../../utils/TeamsFunctions';

import Button from '../Commom/Button';
import { Separator } from '../Commom/CommomStyles/index.styles';

function Buttons() {
    const dispatch = useDispatch();
    const { teams, nTeams } = useSelector(selectTeams);
    const { players, nPlayers } = useSelector(selectPlayers);
    const { captainMode } = useSelector(selectOptions);

    const hasTeamsGenerated = !!teams.length;

    const handleGenerateTeams = () => {
        const error = verifyErrors(players, nPlayers, nTeams);
        if (error) {
            dispatch(newMessage(error));
            return;
        }
        const teams = generateTeams(players, nTeams);
        dispatch(setTeams(teams));
        const success = createMessage("Times gerados com sucesso!", "info");
        dispatch(newMessage(success));
        dispatch(teamsSetted());
    }

    const handleResetTeams = () => {
        dispatch(reset());
        const message = createMessage("Times resetados com sucesso!", "info");
        dispatch(newMessage(message));
        dispatch(resetTeamsSetted());
    }

    const startCaptainMode = () => {
        const error = verifyErrors(players, nPlayers, nTeams);
        if (error) {
            dispatch(newMessage(error));
            return;
        }
        dispatch(startCaptainsSelection(players, nTeams));
        dispatch(teamsSetted());
    }

    const getMainButton = () => {
        if (!captainMode) {
            return (
                <Button
                    color="#66bb6a"
                    handleClick={handleGenerateTeams}
                >
                    gerar times
                </Button>
            );
        }
        return (
            <Button
                color="#66bb6a"
                handleClick={startCaptainMode}
            >
                começar
            </Button>
        );
    }

    return (
        <>
            {getMainButton()}
            {hasTeamsGenerated && (
                <>
                    <Separator base={2} color="none" />
                    <Button
                        color="#64b5f6"
                        handleClick={handleResetTeams}
                    >
                        resetar times
                    </Button>
                </>
            )}
        </>
    );
}

export default Buttons;