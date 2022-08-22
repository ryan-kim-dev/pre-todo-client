import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Links = () => {
  return (
    <LinkBox>
      <LinkDiv>
        <Link to="/">Home</Link>
      </LinkDiv>
      <LinkDiv>
        <Link to="/upload">게시글 등록</Link>
      </LinkDiv>
    </LinkBox>
  );
};

export default Links;

const LinkBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 10px;
`;

const LinkDiv = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  background-color: gray;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
