import styled from 'styled-components';
import { Props } from './interface';

export const H2 = styled.h2<Props>`
  ${(props) => (props.className ? `` : `margin:0;`)}
  font-size: 32px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
