import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    min-width: 150px;
    padding: 20px;
    justify-content: space-between;
    border: 2px solid #212121;
    border-radius: 10px;
    box-shadow: 0 3px 5px 0 #232323;
    color: white;
    text-transform: uppercase;
`;

export const Remove = styled.div`
    display: block;
    color: #e53935;
    margin-left: 10px;
    cursor: pointer;

    :hover {
        color: #b71c1c;
    }
`;