import styled from 'styled-components';
import Input from '../Commom/Input';

export const StyledWrapper = styled.div`
    width: 70%;
    margin: 40px;
`;

export const StyledInput = styled(Input)`
    padding: 20px;
    text-align: left;
    color: #0d47a1;

    ::placeholder {
        color: #333;
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: #333;
    }

    ::-ms-input-placeholder {
        color: #333;
    }
`;