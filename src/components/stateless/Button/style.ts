import styled from 'styled-components';
import { ButtonProps, Props } from './interface';
import { Spinner as DefaultSpinner } from '../../svg/Spinner';

export const buttonKind = {
  primary: `color:#fff; 
            border:1px solid #fff; 
            background:#A154F2; 
            text-transform:uppercase;
            font-size: 14px; 
            letter-spacing:2.5px;
            font-weight: bold;
            transition: background 0.5s;
            &:hover{
              background:#F27A54; 
            }
            &:before{
              position:absolute;
              display:flex;
              justify-content:center;
              align-items:center;
              content:""attr(data-content)"";
              width:100%;
              height:100%;
              top:-1px;
              left:-1px;
              background:#F27A54; 
              border:1px solid #fff;
              border-radius: 10px;
              transition: opacity 2s;
              opacity:0;
              z-index:1;
            }
            &:hover::before{
              opacity:1;
              background:linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
            }
            &:disabled {
              &:hover{
                background:#A154F2; 
              }
              &:hover::before{
                opacity:0;
              }
            }`,
  secondary: `
            background:transparent; 
            color:#000;
            font-size:14px; 
            border: 1px solid rgba(0, 0, 0, 0.3); 
  `,
  tertiary: `
            background:transparent; 
            color:#000;
            font-size:14px; 
            border: none; 
            &:hover{
              text-decoration:underline;
            }
  `,
  icon: `
        background:transparent; 
        border: none;
        color:#000;
        font-size:14px; 
        width: 44px;
        height: 44px;
        border-radius: 99px;
        transition: background 0.5s;

        &:hover{
          background:rgba(0, 0, 0, 0.05);
        }
`,
};

export const Container = styled.div<Props>`
  position: relative;

  width: 100%;
  max-width: 285px;

  ${({ kind }) => kind === 'tertiary' && 'width:fit-content; margin:0 auto;'}
`;

export const Button = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  font-size: 10px;
  cursor: pointer;
  ${({ kind = 'primary' }) => buttonKind[kind]}

  &:disabled {
    opacity: 0.5;
  }
`;

export const Spinner = styled(DefaultSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
`;
