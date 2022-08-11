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
  width: 50%;
  position: relative;
  text-align: center;
`;

const NavEntry = styled.div`
  color: black;
  &:hover {
    color: #B3CB9B;
  }
`;

export default function NavBar({ setView }) {
  return (
    <NavContainer>
      <TitleContainer>
        Face Plant 🌿
      </TitleContainer>

      <NavListContainer>
        <NavEntry>HOME</NavEntry>
        <NavEntry>DETAILS</NavEntry>
        <NavEntry>ABOUT ME</NavEntry>
        <NavEntry>CONTACT</NavEntry>
      </NavListContainer>
    </NavContainer>
  );
}
