import React, { useState } from 'react';
import exampleData from '../exampleData.json';

function App() {

  if (exampleData) {
    console.log(exampleData.images[0].url);

  }

  if (!exampleData) {
    return <div>Hello world</div>
  }

  return (
    <div>

      <h2>This is Face Plant Nav Bar</h2>
      <img src={exampleData.images[0].url}></img>
      <div>This is Profile Pic and Bio</div>
      <div>This is Plant cards</div>
      <div>This is Plant Details</div>


    </div>
  );
};

export default App;
