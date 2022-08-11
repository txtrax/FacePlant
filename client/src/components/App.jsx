import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlantList from './PlantList';
import NavBar from './NavBar';
import BioInfo from './BioInfo';
import image from '../../../assets/213727.jpg';
import footer from '../../../assets/2409038.jpg';

const AppContainer = styled.div`
  postion: relative;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
`;

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

const FooterImage = styled.img`
  position: relative;
  display: block;
  margin: 40px 0 0 0;
  object-fit: cover;
  width: 100%;
  height: 140px;
`;

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get('/plants')
      .then((results) => {
        setPlants(results.data);
      })
      .catch((err) => {
        console.log('error retrieving plants', err);
      });
  }, []);

  if (plants.length === 0) {
    return <div>Hello world</div>;
  }
  return (
    <AppContainer>

      <NavBar />

      <BioInfo image={image} />

      <ButtonContainer>
        <Button>Add Plant</Button>
        <Button>Diagnose</Button>
      </ButtonContainer>

      <PlantList plants={plants} />

      <FooterImage src={footer} />

    </AppContainer>
  );
}

export default App;
