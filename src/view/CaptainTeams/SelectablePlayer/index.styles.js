import styled from 'styled-components';

export const StyledPlayer = styled.div`
    min-width: 150px;
    max-width: 100%;
    padding: 20px;
    border: 2px solid #212121;
    border-radius: 10px;
    box-shadow: 0 3px 5px 0 #232323;
    cursor: pointer;
    > p {
        max-width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: white;
    }
    :hover {
        border-color: #ffd54f;
        box-shadow: 0 3px 5px 0 #ffca28;
    }
`;