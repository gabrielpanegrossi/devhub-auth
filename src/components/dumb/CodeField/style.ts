import styled from 'styled-components';
import { StyledProps } from './interface';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 285px;
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

export const Input = styled.input<StyledProps>`
  width: 15%;
  min-width: 40px;
  height: 40px;
  margin-top: 8px;
  border-radius: 3px;
  outline: transparent;
  padding: 0 8px;
  text-align: center;
  ${(props) =>
    props.error
      ? `color:#F27474; border:1px solid #F27474; border-left:3px solid #F27474;`
      : `border: 1px solid rgba(0, 0, 0, 0.3); border-left:3px solid #a154f2`}
`;

export const Error = styled.div`
  margin-top: 4px;
  color: #cf6f8a;
  text-align: center;
`;
