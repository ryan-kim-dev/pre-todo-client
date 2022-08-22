import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderBox>
      <h1>CRUD</h1>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;

  h1 {
    color: #414141;
  }
`;
