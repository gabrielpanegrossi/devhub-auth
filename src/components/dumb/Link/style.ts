import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { Props } from './interface';

export const Link = styled(DefaultLink)<Props>`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
