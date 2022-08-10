import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid;
  border-color: red;
`;

export default function PlantList({ plants }) {
  console.log(plants);

  return (
    <div>
      <header>
        <h2>All Plants</h2>
      </header>
      <ListContainer>
        {plants.map((plant) => <Card plant={plant} key={plant.name} />)}
      </ListContainer>
    </div>
  );
}
