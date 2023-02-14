import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import AddModal from './AddModal';

const Header = styled.h2`
  padding: 20px 20px 0 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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

export default function PlantList({ plants, setPlants }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <Header>My Plants</Header>

      <ButtonContainer>
        <Button onClick={() => { setIsOpen(true); }}>Add Plant</Button>
        <Button>Diagnose</Button>
        <Button>Add Timer</Button>
      </ButtonContainer>

      <ListContainer>
        {plants.map((plant) => <Card plant={plant} key={plant.name} />)}
      </ListContainer>

      {isOpen && <AddModal setIsOpen={setIsOpen} setPlants={setPlants} />}

    </div>
  );
}
