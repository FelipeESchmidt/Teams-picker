import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledTopWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    column-gap: 1%;
    row-gap: 10px;
    width: 100%;
    @media screen and (max-width: 950px) {
      flex-direction: column;
    }
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