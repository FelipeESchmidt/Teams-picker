import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 5px;
    font-size: 20px;
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    border-radius: 5px;
    background-color: #00000000;
    box-shadow: 0px 1px 2px 0px ${props => props.color};

    text-align: center;
    text-transform: uppercase;

    cursor: pointer;
`;