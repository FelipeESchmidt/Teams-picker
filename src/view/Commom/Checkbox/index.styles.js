import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledWrapper = styled.div`
    display: flex;
    gap: 10px;
    color: #666;
    cursor: pointer;
`;

export const StyledCheckbox = styled.div`
    position: relative;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: inset 0px 0px 0px 2px #171818;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    width: 22px;
    height: 22px;
    font-size: 22px;
    
`;

export const StyledText = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #666;
    user-select: none;
`;
