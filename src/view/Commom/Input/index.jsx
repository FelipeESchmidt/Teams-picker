import React from 'react';

import { capitalizeFirstLetter } from '../../../utils/StringFunctions';
import { StyledIcon, StyledInput, StyledTitle, StyledWrapper } from './index.styles';

function Input({ id, type, value, handleChange, icon, ...otherProps }) {
    return (
        <StyledWrapper>
            <StyledTitle><StyledIcon icon={icon} />{capitalizeFirstLetter(id)}</StyledTitle>
            <StyledInput
                id={id}
                type={type}
                onChange={handleChange}
                value={value}
                {...otherProps}
            />
        </StyledWrapper>
    );
}

export default Input;