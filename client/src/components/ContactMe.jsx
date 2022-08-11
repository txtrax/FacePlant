import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  padding: 0 20px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ContactMe() {
  return (
    <ContactContainer>
      <Header>Contact</Header>
      {`ttran0293@gmail.com  •  366-822-5563  •  linkedin.com/in/theresatee  •  github.com/txtrax`}
    </ContactContainer>
  );
}
