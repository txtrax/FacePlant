import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantList from './PlantList';
import exampleData from '../exampleData.json';

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

      <h2>This is Face Plant Nav Bar</h2>
      <img src={plants[0].image_url} />
      <div>This is Profile Pic and Bio</div>
      <PlantList plants={plants} />
      <div>This is Plant Details</div>

    </div>
  );
}

export default App;
