import React from 'react';

import { StyledButton } from './index.styles';

function Button({ children, color, handleClick }) {
    return (
        <StyledButton onClick={handleClick} color={color}>
            {children}
        </StyledButton>
    );
}

export default Button;