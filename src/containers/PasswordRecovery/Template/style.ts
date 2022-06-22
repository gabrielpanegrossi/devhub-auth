import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px 16px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &:nth-child(2) {
    justify-content: center;
  }

  &:last-child {
    justify-content: right;
  }

  > div {
    width: fit-content;
  }
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const Handler = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1280px;
  padding: 8px 16px;
`;
