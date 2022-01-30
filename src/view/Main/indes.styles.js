import styled from 'styled-components';

export const StyledSite = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 30px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
  }
`;