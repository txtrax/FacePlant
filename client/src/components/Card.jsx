import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid;
  border-color: black;
  width: 280px;
`;

const CardImage = styled.img`
  position: relative;
  display: block;
  object-fit: cover;
  width: 280px;
  height: 200px;
`;

export default function Card({ plant }) {
  console.log(plant);
  const description = `${plant.description.slice(0, 118)}...`;

  return (
    <CardContainer>

      <CardImage src={plant.image_url} alt="plant image" />

      <h2>
        {plant.name}
      </h2>

      {plant.location}

      <p>{description}</p>

      <small>{plant.createdAt}</small>

    </CardContainer>
  );
}
