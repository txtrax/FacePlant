import React, { useState } from 'react';
import styled from 'styled-components';
import DetailsModal from './DetailsModal';

const CardContainer = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 241px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.img`
  position: relative;
  display: block;
  object-fit: cover;
  height: 175px
`;

const PlantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 7px;
  height: 125px;
`;

export default function Card({ plant }) {
  const description = `${plant.description.slice(0, 100)}...`;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <CardContainer onClick={() => setShowDetails(true)}>

      <CardImage src={plant.image_url} alt="plant image" />

      <PlantInfo>
        <big>{plant.name}</big>

        {plant.location}

        <small>{description}</small>
      </PlantInfo>

      {showDetails && (
        <DetailsModal
          setShowDetails={setShowDetails}
          plant={plant}
        />
      )}

    </CardContainer>
  );
}
