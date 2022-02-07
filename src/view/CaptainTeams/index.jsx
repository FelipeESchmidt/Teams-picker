import React, { useEffect, useState } from 'react';

import ProgressBar from '../Commom/ProgressBar';

import SelectingCaptains from './SelectingCaptains';
import SelectingPlayers from './SelectingPlayers';
import SelectingFinished from './SelectingFinished';

import { steps } from './index.constants';
import { StyledTitle, StyledTop } from './index.styles';
import CaptainsContext from '../../context/CaptainsContext';

const stepsComponent = [
    <SelectingCaptains />,
    <SelectingPlayers />,
    <SelectingFinished />,
];

function CaptainTeams() {
    const [step, setStep] = useState(0);
    const [porcentage, setPorcentage] = useState(0);

    useEffect(() => {
        setPorcentage(100 * steps[step].complete)
    }, [step]);

    const stepInfo = () => `${step + 1}/${steps.length}`;

    const getStepComponent = () => {
        return stepsComponent[step];
    }

    const handleNextStep = () => {
        setStep(step+1);
    }

    return (
        <>
            <StyledTop>
                <ProgressBar size={50} porcentage={porcentage} />
                <StyledTitle>{stepInfo()} {steps[step].title}</StyledTitle>
            </StyledTop>
            <CaptainsContext.Provider value={{ nextStep: handleNextStep }}>
                {getStepComponent()}
            </CaptainsContext.Provider>
        </>
    );
}

export default CaptainTeams;