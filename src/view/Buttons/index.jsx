import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTeams } from '../../store/Teams/Teams.selectors';
import { reset, setTeams } from '../../store/Teams/Teams.actions';

import Button from '../Commom/Button';
import { Separator } from '../Commom/CommomStyles/index.styles';

function Buttons() {
    const dispatch = useDispatch();
    const { teams } = useSelector(selectTeams);

    const hasTeamsGenerated = !!teams.length;

    const handleGenerateTeams = () => {
        dispatch(setTeams([1, 2]));
    }

    const handleResetTeams = () => {
        dispatch(reset());
    }

    return (
        <>
            <Button
                color="#66bb6a"
                handleClick={handleGenerateTeams}
            >
                gerar times
            </Button>
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