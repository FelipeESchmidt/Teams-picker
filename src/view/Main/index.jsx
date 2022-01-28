import React from 'react';
import Menu from '../Menu';

import { StyledSite } from './indes.styles';

function Main() {
    return (
        <StyledSite>
            <Menu />
            <div style={{ width: '70%' }}></div>
        </StyledSite>
    );
}

export default Main;