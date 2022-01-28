import styled from 'styled-components';

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: calc(${props => props.base} * 4px) 0;
  background-color: ${props => props.color};
  box-shadow: 0px 1px 4px 0px ${props => props.color};
`;