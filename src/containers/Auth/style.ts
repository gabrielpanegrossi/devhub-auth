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
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Article = styled.article`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  > section {
    max-width: 448px;
    padding: 24px;
    background: #3c444c;
    border-radius: 5px;
    box-shadow: 0px 4px 15px 1px rgba(60, 68, 76, 0.2);
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Auth = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  label {
    color: #fff;
  }
`;

export const Register = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  margin-top: 24px;
`;

export const Title = styled(DefaultTitle)`
  width: fit-content;
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

export const SubText = styled(DefaultText)`
  letter-spacing: 5px;
  width: fit-content;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 0;
    text-align: unset;
  }
`;

export const Text = styled(DefaultText)`
  color: #fff;
  margin-right: 8px;
`;

export const Link = styled(DefaultLink)`
  color: #fff;

  &:visited {
    color: #fff;
  }
`;
