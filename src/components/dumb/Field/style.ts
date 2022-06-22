import styled from 'styled-components';
import { StyledProps } from './interface';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Input = styled.input<StyledProps>`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  border-radius: 3px;
  outline: transparent;
  padding: 0 8px;
  ${(props) =>
    props.error && props.touched
      ? `color:#F27474; border:1px solid #F27474; border-left:3px solid #F27474;`
      : `border: 1px solid rgba(0, 0, 0, 0.3); border-left:3px solid #a154f2`}
`;

export const Error = styled.div`
  margin-top: 4px;
  color: #cf6f8a;
`;
