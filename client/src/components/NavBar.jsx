import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.aside`
  display: flex;
  flex-directiosn: row;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
`;

export default function NavBar() {
  return (
    <NavContainer>
      <h1>Face Plant</h1>
      <ul>
        <li>My Plants</li>
        <li>Add Plant</li>
      </ul>
    </NavContainer>
  );
}
