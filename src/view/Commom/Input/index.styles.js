import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`;

export const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  min-width: 25px;
  margin-right: 10px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  font-size: 20px;
  color: #666;
  border: 2px solid #666;
  border-radius: 5px;
  background-color: #00000000;

  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  outline: none;
`;