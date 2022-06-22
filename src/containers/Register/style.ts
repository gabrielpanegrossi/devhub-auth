import styled from 'styled-components';
import { Text as DefaultText, Link as DefaultLink, Title as DefaultTitle } from '~components';

export const Container = styled.section`
  display: flex;
  padding: 16px;
  min-height: 100%;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  > section {
    max-width: 448px;
    padding: 24px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const Register = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 50px;
`;

export const RegisterHeader = styled.div`
  margin-bottom: 16px;

  > p {
    text-align: center;
  }
`;

export const Auth = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  margin-top: 24px;

  > p {
    margin-right: 8px;
  }
`;

export const Title = styled(DefaultTitle)`
  width: fit-content;
  margin: 16px auto 0;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

export const Text = styled(DefaultText)`
  letter-spacing: 5px;
  width: fit-content;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const Link = styled(DefaultLink)`
  &:hover {
    color: #a154f2;
  }
`;
