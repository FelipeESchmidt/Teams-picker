import styled from 'styled-components';

export const StyledTeam = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 8px;
    width: 49%;
    padding: 20px;
    border: 2px solid #212121;
    border-radius: 10px;
    box-shadow: 0 3px 8px 0 #232323;
`;

export const StyledPlayer = styled.h4`
    ::before{
        content: '-';
        margin-right: 5px;
    }
    font-weight: normal;
    text-transform: uppercase;
    color: white;
`;