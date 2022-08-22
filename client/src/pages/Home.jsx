import React from 'react';
import styled from 'styled-components';
import { Container } from '../GlobalStyle';
import Lists from '../components/Lists';

const Home = () => {
  return (
    <HomeContainer>
      <Lists />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
