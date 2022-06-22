import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { State } from './interface';
import { Title, Button, BackArrow, CloseX } from '~components';
import * as Styled from './style';

function Template() {
  const navigate = useNavigate();
  const [userRecovery, setUserRecovery] = useState<State>({});

  function navigateBack() {
    navigate(-1);
  }

  function navigateHome() {
    navigate('/');
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderContent>
          <Styled.HeaderWrapper>
            <Button onClick={navigateBack} kind='icon'>
              <BackArrow />
            </Button>
          </Styled.HeaderWrapper>
          <Styled.HeaderWrapper>
            <Title>DevHub</Title>
          </Styled.HeaderWrapper>
          <Styled.HeaderWrapper>
            <Button onClick={navigateHome} kind='icon'>
              <CloseX />
            </Button>
          </Styled.HeaderWrapper>
        </Styled.HeaderContent>
      </Styled.Header>
      <Styled.Content>
        <Styled.Handler>{<Outlet context={{ userRecovery, setUserRecovery }} />}</Styled.Handler>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Template;
