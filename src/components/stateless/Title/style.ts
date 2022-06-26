import styled from 'styled-components';
import { Props } from './interface';

export const H1 = styled.h1<Props>`
  ${(props) => (props.className ? `` : `margin:0;`)}
  width: fit-content;
  padding: 0;
  font-size: 44px;
  letter-spacing: 5px;
  color: #a154f2;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
