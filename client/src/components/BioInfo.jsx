import React from 'react';
import styled from 'styled-components';
import {
  FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare,
} from 'react-icons/fa';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const BioImage = styled.img`
  position: relative;
  display: block;
  width: 65%;
`;

const BioContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 35%;
`;

const ShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 3px 0px 3px;
`;

const FacebookIcon = styled(FaFacebookSquare)`
  width: 2em;
  height: 2em;
  color: #B2B2B2;
  &:hover {
    color: #B3CB9B;
  }
`;

const TwitterIcon = styled(FaTwitterSquare)`
  width: 2em;
  height: 2em;
  color: #B2B2B2;
  &:hover {
    color: #B3CB9B;
  }
`;

const PinterestIcon = styled(FaPinterestSquare)`
  width: 2em;
  height: 2em;
  color: #B2B2B2;
  &:hover {
    color: #B3CB9B;
  }
`;

const InstagramIcon = styled(FaInstagramSquare)`
  width: 2em;
  height: 2em;
  color: #B2B2B2;
  &:hover {
    color: #B3CB9B;
  }
`;

export default function BioInfo({ image }) {
  return (
    <InfoContainer>
      <BioImage src={image} />

      <BioContainer>

        <h1>Art is the expression of one's inner reality through the use of nature's beauty.</h1>

        <hr />

        <p style={{ fontSize: '0.85em' }}>Photos provided by Pexel and Plant.id.</p>

        <ShareContainer>
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </ShareContainer>

      </BioContainer>

    </InfoContainer>
  );
}
