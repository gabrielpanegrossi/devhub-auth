import styled from 'styled-components';
import { Link as DefaultLink } from 'react-router-dom';
import { Props } from './interface';

export const Link = styled(DefaultLink)<Props>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-decoration: none;

  &:visited {
    color: #000;
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
