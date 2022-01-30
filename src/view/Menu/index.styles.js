import styled from 'styled-components';

export const StyledLogo = styled.h2`
  font-size: 30px;
  color: #666;
  @media screen and (max-width: 950px) {
    font-size: 25px;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 40px;
  padding: 40px;
  border: 2px solid #212121;
  box-shadow: 0 3px 8px 0 #232323;
  border-radius: 20px;
  @media screen and (max-width: 950px) {
    width: 98%;
    margin: 1%;
    padding: 10px;
  }
`;

export const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
`;