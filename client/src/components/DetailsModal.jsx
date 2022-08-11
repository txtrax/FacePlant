import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Background = styled.div`
  display: block;
  position: fixed;
  text-align: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.7);
`;

const ModalContent = styled.div`
  position: relative;
  margin: auto;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  width: 50%;
  height: 90%;
`;

const Image = styled.img`
  position: relative;
  display: block;
  object-fit: cover;
  border-radius: 5px;
  width: 300px;
  height: 218px;
`;

export default function DetailsModal({ plant }) {
  const date = moment(plant.createdAt).fromNow();
  console.log(date);

  return (
    <Background>
      <ModalContent>
        <div>
          <h2>{plant.name}</h2>
          <Image src={plant.image_url} alt="plant image" />
          <small>{date}</small>
        </div>

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
      </ModalContent>
    </Background>
  );
}
