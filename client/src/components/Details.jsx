import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  height: 300px;
`;

const Image = styled.img`
  position: relative;
  display: block;
  object-fit: cover;
  border-radius: 5px;
  width: 300px;
  height: 218px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
`;

export default function DetailList({ plant }) {
  return (
    <DetailContainer>
      <Image src={plant.image_url} alt="plant image" />

      <ContentContainer>
        <h2>{plant.name}</h2>

        <div>
          <b>Location:</b> {plant.location}
        </div>

        <div>
          <b>Common Name:</b>
          {' '}
          {plant.common_names.length > 0 ? plant.common_names[0] : 'N/A'}
        </div>

        <div>
          <b>Scientific Name:</b>
          {' '}
          {plant.scientific_name ? plant.scientific_name : 'N/A'}
        </div>

        <div>
          <b>Description:</b>
          {' '}
          {plant.description ? plant.description : 'N/A'}
        </div>

        <div>
          <b>Propagation:</b>
          {' '}
          {plant.propagation_methods.length > 0 ? plant.propagation_methods[0] : 'N/A'}
        </div>
      </ContentContainer>
    </DetailContainer>
  );
}
