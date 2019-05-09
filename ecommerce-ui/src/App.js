import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt as fasStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import homes from './_data/airbnbs.json';
import HomeList from './HomeList';

library.add(fasStar, farStar, fasStarHalfAlt);

function App() {
  return (
    <div className="App">
      <HomeList homes={homes} />
    </div>
  );
}

export default App;
