import styled from 'styled-components';
import { Text as DefaultText, Button as DefaultButton } from '~components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-width: 285px;
  max-width: 480px;
  margin: 0 auto;
`;

export const Content = styled.section`
  margin-bottom: 40px;
`;

export const Text = styled(DefaultText)`
  margin-top: 8px;

  span {
    font-style: italic;
  }
`;

export const Button = styled(DefaultButton)`
  margin-top: 8px;
`;
