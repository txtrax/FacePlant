import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.aside`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
`;

const TitleContainer = styled.h1`
  display: flex;
  justify-content: center;
  width: 25%;
`;

const NavListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 33%;
  position: relative;
  text-align: center;
`;

export default function NavBar({ setView }) {
  return (
    <NavContainer>
      <TitleContainer>
        Face Plant
      </TitleContainer>

      <NavListContainer>
        <div>HOME</div>
        <div>ABOUT ME</div>
        <div>CONTACT</div>
      </NavListContainer>
    </NavContainer>
  );
}
