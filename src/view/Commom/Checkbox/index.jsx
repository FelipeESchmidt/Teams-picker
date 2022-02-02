import React from 'react';

import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import { StyledWrapper, StyledCheckbox, StyledText, StyledIcon } from './index.styles';

function Checkbox({ id, text, value, handleChange, ...otherProps }) {
    return (
        <StyledWrapper onClick={() => handleChange(id)}>
            <StyledCheckbox
                type="checkbox"
                value={value}
                {...otherProps}
            >
                <StyledIcon icon={value ? faCheckSquare : faSquare} />
            </StyledCheckbox>
            <StyledText>
                {text}
            </StyledText>
        </StyledWrapper>
    );
}

export default Checkbox;