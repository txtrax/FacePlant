import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Header = styled.h2`
  padding: 20px;
`;

const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 10%;
`;

export default function PlantList({ plants }) {
  console.log(plants);

  return (
    <div>

      <Header>My Plants</Header>

      <ListContainer>
        {plants.map((plant) => <Card plant={plant} key={plant.name} />)}
      </ListContainer>

    </div>
  );
}
