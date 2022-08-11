import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  padding: 0 20px;
`;

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const Image = styled.img`
  position: relative;
  display: block;
  object-fit: cover;
  border-radius: 5px;
  width: 350px;
  height: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  margin: 0 20px;
`;

export default function AboutMe({ profile }) {
  return (
    <div>
      <Header>About Me</Header>
      <AboutContainer>
        <ContentContainer>
          <h2>Theresa</h2>

          <div>
            <b>Location:</b> Tustin, CA
          </div>

          <div>
            <b>Common Name:</b> BikWon, T-rexa, Tee, T^2
          </div>

          <div>
            <b>Scientific Name:</b> Homo Sapien
          </div>

          <div>
            <b>Description:</b> I got into gardening when I was a weee gal.
          </div>

          <div>
            <b>Status:</b>
            {`>>> Open to trade plants! (◕‿◕✿)`}
          </div>
        </ContentContainer>

        <Image src={profile} alt="owner image" />
      </AboutContainer>
    </div>
  );
}