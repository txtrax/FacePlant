import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavBar from './NavBar';
import BioInfo from './BioInfo';
import PlantList from './PlantList';
import DetailList from './DetailList';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import image from '../../../assets/213727.jpg';
import footer from '../../../assets/2409038.jpg';
import profile from '../../../assets/plantTee.jpg';

const AppContainer = styled.div`
  postion: relative;
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
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
  const [view, setView] = useState('home');

  useEffect(() => {
    axios.get('/plants')
      .then((results) => {
        setPlants(results.data);
      })
      .catch((err) => {
        console.log('error retrieving plants', err);
      });
  }, []);

  const renderView = () => {
    if (view === 'home') {
      return <Home plants={plants} image={image} />;
    }
  };

  if (plants.length === 0) {
    return <div>Hello world</div>;
  }
  return (
    <AppContainer>

      <NavBar setView={setView} />

      <BioInfo image={image} />

      <PlantList plants={plants} setPlants={setPlants} />

      <DetailList plants={plants} />

      <AboutMe profile={profile} />

      <ContactMe />

      <FooterImage src={footer} />

    </AppContainer>
  );
}

export default App;
