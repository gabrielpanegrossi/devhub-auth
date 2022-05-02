import styled from 'styled-components';
import { Text as DefaultText, Link as DefaultLink, Subtitle as DefaultSubtitle } from '~components';

export const Container = styled.section`
  display: flex;
  padding: 16px;
  height: 100%;
  background: #f2f4f7;

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const Handler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 448px;
  margin: 0 auto;
  overflow: hidden;

  > section {
    background: #3c444c;
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Register = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Auth = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  margin-top: 24px;

  > p {
    color: #fff;
    margin-right: 8px;
  }
`;

export const Subtitle = styled(DefaultSubtitle)`
  width: fit-content;
  margin: 16px auto 0;
  color: #fff;
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

export const SubText = styled(DefaultText)`
  color: #fff;
`;

export const Link = styled(DefaultLink)`
  margin-top: 16px;
`;
