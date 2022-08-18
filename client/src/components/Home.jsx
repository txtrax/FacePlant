import React, { useState } from 'react';
import styled from 'styled-components';
import PlantList from './PlantList';
import BioInfo from './BioInfo';
import AddModal from './AddModal';

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
  font-size: 1em;
  align-items: center;
  margin: 43px;
  width: 15%;
  height: 50px;
  border: 1px solid;
  border-radius: 26px;
  border-color: #B3CB9B;
  background-color: #B3CB9B;
  color: white;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

export default function Home({ plants, image, setPlants }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <BioInfo image={image} />

      <ButtonContainer>
        <Button onClick={() => { setIsOpen(true); }}>Add Plant</Button>
        <Button>Diagnose</Button>
        <Button>Add Timer</Button>
      </ButtonContainer>

      {plants && <PlantList plants={plants} />}
      {isOpen && <AddModal setIsOpen={setIsOpen} setPlants={setPlants} />}
    </div>
  );
}
