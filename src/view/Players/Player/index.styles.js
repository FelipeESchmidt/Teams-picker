import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    min-width: 150px;
    max-width: 100%;
    padding: 20px;
    justify-content: space-between;
    border: 2px solid #212121;
    border-radius: 10px;
    box-shadow: 0 3px 5px 0 #232323;
    text-transform: uppercase;
`;

export const StyledName = styled.div`
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
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