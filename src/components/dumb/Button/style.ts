import styled from 'styled-components';
import { Props } from './interface';

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
            }
            &:hover::before{
              opacity:1;
              background:linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
            }`,
  secondary: ``,
  tertiary: `background:transparent; 
            color:#fff;
            font-size:14px; 
            border:none; 
            height:fit-content; 
            width:fit-content;`,
};

export const Button = styled.button<Props>`
  position: relative;
  width: 100%;
  max-width: 285px;
  height: 40px;
  border-radius: 10px;
  font-size: 10px;
  cursor: pointer;
  ${({ kind = 'primary' }) => buttonKind[kind]}
`;
