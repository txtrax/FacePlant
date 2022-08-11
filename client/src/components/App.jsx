import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlantList from './PlantList';
import NavBar from './NavBar';
import data from '../../exampleData.json';
import image from '../../../assets/213727.jpg';

const BioImage = styled.img`
  position: relative;
  display: block;
  width: 100%;
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
    <div>

      <NavBar />
      <div>
        This is Profile Pic and Bio
        <BioImage src={image} />
      </div>

      <PlantList plants={plants} />
      <div>This is Plant Details</div>

    </div>
  );
}

export default App;
