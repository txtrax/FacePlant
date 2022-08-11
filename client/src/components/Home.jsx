import React from 'react';
import styled from 'styled-components';
import PlantList from './PlantList';
import BioInfo from './BioInfo';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  position: relative
  display: flex;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  align-items: center;
  margin: 43px;
  width: 10%;
  height: 43px;
  border: 1px solid;
  border-radius: 26px;
  border-color: #B3CB9B;
  background-color: #B3CB9B;
  color: white;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

export default function Home({ plants, image }) {
  return (
    <div>
      <BioInfo image={image} />

      <ButtonContainer>
        <Button>Add Plant</Button>
        <Button>Diagnose</Button>
      </ButtonContainer>

      <PlantList plants={plants} />
    </div>
  );
}
